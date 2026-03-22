/*
This script builds a normalized JSON representation of the Dataspecer
application profile from the generated DSV Turtle file.
Input:  ./resources/dsv.ttl
Output: ./output/spec-ap.json  
*/

import fs from "node:fs/promises";
import { Parser } from "n3";

// DSV vocabulary constants used during extraction.
const RDF_TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
const SKOS_PREF_LABEL = "http://www.w3.org/2004/02/skos/core#prefLabel";
const SKOS_DEFINITION = "http://www.w3.org/2004/02/skos/core#definition";
const DCT_IS_PART_OF = "http://purl.org/dc/terms/isPartOf";

const DSV_CLASS_PROFILE = "https://w3id.org/dsv#ClassProfile";
const DSV_OBJECT_PROP_PROFILE = "https://w3id.org/dsv#ObjectPropertyProfile";
const DSV_DATATYPE_PROP_PROFILE = "https://w3id.org/dsv#DatatypePropertyProfile";
const DSV_CLASS = "https://w3id.org/dsv#class";
const DSV_PROPERTY = "https://w3id.org/dsv#property";
const DSV_DOMAIN = "https://w3id.org/dsv#domain";
const DSV_OBJECT_RANGE = "https://w3id.org/dsv#objectPropertyRange";
const DSV_DATATYPE_RANGE = "https://w3id.org/dsv#datatypePropertyRange";
const DSV_CARDINALITY = "https://w3id.org/dsv#cardinality";
const DSV_REQUIREMENT_LEVEL = "https://w3id.org/dsv#requirementLevel";
const DSV_REUSES_PROP_VALUE = "https://w3id.org/dsv#reusesPropertyValue";
const DSV_REUSED_PROPERTY = "https://w3id.org/dsv#reusedProperty";
const DSV_REUSED_FROM_RESOURCE = "https://w3id.org/dsv#reusedFromResource";


function getObjects(quads, subject, predicate) {
    return quads
        .filter(q => q.subject.value === subject && q.predicate.value === predicate)
        .map(q => q.object.value);
}

function getOne(quads, subject, predicate) {
    return getObjects(quads, subject, predicate)[0] ?? null;
}

// dsv:reusesPropertyValue points to blank nodes. This resolves what vocab term
// is being reused (e.g. skos:prefLabel) and from which resource IRI.
function getReusedPropertyValues(quads, subject) {
    const bnodeIds = getObjects(quads, subject, DSV_REUSES_PROP_VALUE);
    return bnodeIds.map(bnodeId => ({
        property: getOne(quads, bnodeId, DSV_REUSED_PROPERTY),
        fromResource: getOne(quads, bnodeId, DSV_REUSED_FROM_RESOURCE),
    }));
}

// Cardinality IRIs encode min/max directly e.g. cardinality:11 → {min:1, max:1}
// cardinality:01 → {min:0, max:1}, cardinality:0n → {min:0, max:"n"}
function parseCardinality(iri) {
    if (!iri) return null;
    const local = iri.split("#").pop() ?? iri.split("/").pop();
    return { min: local[0], max: local[1] };
}

// Load and parse the application profile Turtle file.
const dsvFile = "./resources/dsv.ttl";
const outputFile = "./output/spec-ap.json";
const ttl = await fs.readFile(dsvFile, "utf-8");

const parser = new Parser();
const quads = parser.parse(ttl);

// Extract class profile resources.
const classProfileIris = [...new Set(
    quads
        .filter(q => q.predicate.value === RDF_TYPE && q.object.value === DSV_CLASS_PROFILE)
        .map(q => q.subject.value)
)];

const classProfiles = classProfileIris.map(iri => ({
    iri,
    label: getObjects(quads, iri, SKOS_PREF_LABEL),
    definition: getObjects(quads, iri, SKOS_DEFINITION),
    partOf: getOne(quads, iri, DCT_IS_PART_OF),
    profiledClass: getOne(quads, iri, DSV_CLASS),
    reuses: getReusedPropertyValues(quads, iri),
}));

// Extract both object and datatype property profiles into one normalized list.
const propProfileIris = [...new Set([
    ...quads
        .filter(q => q.predicate.value === RDF_TYPE && q.object.value === DSV_OBJECT_PROP_PROFILE)
        .map(q => q.subject.value),
    ...quads
        .filter(q => q.predicate.value === RDF_TYPE && q.object.value === DSV_DATATYPE_PROP_PROFILE)
        .map(q => q.subject.value),
])];

const propertyProfiles = propProfileIris.map(iri => {
    const types = getObjects(quads, iri, RDF_TYPE);
    const isObject = types.includes(DSV_OBJECT_PROP_PROFILE);
    const isDatatype = types.includes(DSV_DATATYPE_PROP_PROFILE);

    return {
        iri,
        label: getObjects(quads, iri, SKOS_PREF_LABEL),
        definition: getObjects(quads, iri, SKOS_DEFINITION),
        partOf: getOne(quads, iri, DCT_IS_PART_OF),
        profiledProperty: getOne(quads, iri, DSV_PROPERTY),
        domain: getOne(quads, iri, DSV_DOMAIN),
        range: isObject
            ? getOne(quads, iri, DSV_OBJECT_RANGE)
            : getOne(quads, iri, DSV_DATATYPE_RANGE),
        propertyType: isObject ? "ObjectPropertyProfile" : "DatatypePropertyProfile",
        cardinality: parseCardinality(getOne(quads, iri, DSV_CARDINALITY)),
        requirementLevel: getOne(quads, iri, DSV_REQUIREMENT_LEVEL),
        reuses: getReusedPropertyValues(quads, iri),
    };
});

const ap = { source: dsvFile, classProfiles, propertyProfiles };

console.log(`Found ${classProfiles.length} class profiles and ${propertyProfiles.length} property profiles in ${dsvFile}.`);
await fs.writeFile(outputFile, JSON.stringify(ap, null, 2), "utf-8");
console.log(`Wrote ${outputFile}`);
