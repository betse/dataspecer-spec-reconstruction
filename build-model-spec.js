/*
This script builds a simple JSON representation of classes and properties
from the generated model Turtle file.
Input:  ./resources/model.owl.ttl
Output: ./output/spec-model.json
*/

import fs from "node:fs/promises";
import { Parser } from "n3";

const RDFS_CLASS = "http://www.w3.org/2000/01/rdf-schema#Class";
const RDFS_PROPERTY = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property";

const RDFS_TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
const RDFS_LABEL = "http://www.w3.org/2000/01/rdf-schema#label";
const RDFS_COMMENT = "http://www.w3.org/2000/01/rdf-schema#comment";
const RDFS_DOMAIN = "http://www.w3.org/2000/01/rdf-schema#domain";
const RDFS_RANGE = "http://www.w3.org/2000/01/rdf-schema#range";

const OWL_CLASS = "http://www.w3.org/2002/07/owl#Class";
const OWL_OBJECT_PROPERTY = "http://www.w3.org/2002/07/owl#ObjectProperty";
const OWL_DATATYPE_PROPERTY = "http://www.w3.org/2002/07/owl#DatatypeProperty";

function getObjects(quads, subject, predicate) {
    return quads
        .filter(q => q.subject.value === subject && q.predicate.value === predicate)
        .map(q => q.object.value);
}


const modelFile = "./resources/model.owl.ttl";
const outputFile = "./output/spec-model.json";
const ttl = await fs.readFile(modelFile, "utf-8");

const parser = new Parser();
const quads = parser.parse(ttl);

const classIris = [...new Set(quads
    .filter(q => q.predicate.value === RDFS_TYPE &&
        [RDFS_CLASS, OWL_CLASS].includes(q.object.value))
    .map(q => q.subject.value)
)];

const propertyIris = [...new Set(quads
    .filter(q => q.predicate.value === RDFS_TYPE &&
        [RDFS_PROPERTY, OWL_OBJECT_PROPERTY, OWL_DATATYPE_PROPERTY].includes(q.object.value))
    .map(q => q.subject.value)
)];

const spec = {
    source: modelFile,
    classes: classIris.map(iri => ({
        iri,
        label: getObjects(quads, iri, RDFS_LABEL) || "",
        defination: getObjects(quads, iri, RDFS_COMMENT) || ""
    })),
    properties: propertyIris.map(iri => ({
        iri,
        label: getObjects(quads, iri, RDFS_LABEL) || "",
        defination: getObjects(quads, iri, RDFS_COMMENT) || "",
        domain: getObjects(quads, iri, RDFS_DOMAIN) || "",
        range: getObjects(quads, iri, RDFS_RANGE) || ""
    }))
};

console.log(`Found ${classIris.length} classes and ${propertyIris.length} properties in ${modelFile}.`);
await fs.writeFile(outputFile, JSON.stringify(spec, null, 2), "utf8");
console.log(`Wrote ${outputFile}`);
