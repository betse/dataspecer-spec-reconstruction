const DOCS_DATA = {
  "specification": {
    "id": "dcat-dap",
    "iri": "https://mff-uk.github.io/specifications/dcat-dap#",
    "title": "DCAT 3 Default Application Profile",
    "description": "Default application profile for DCAT 3, published as a standalone specification.",
    "type": "application_profile",
    "documentationUrl": "https://mff-uk.github.io/specifications/dcat-dap/",
    "language": "en",
    "notes": {
      "propertyListingStrategy": "properties arrays list the properties rendered directly under each class section in the published specification; inherited semantics are represented through hierarchy/source.",
      "inheritanceResolution": "definitions and hierarchy were taken from the published page, which already exposes profiled and specialized parent terms."
    }
  },
  "metadata": {
    "introduction": "This is introduction",
    "overviewAvailable": true
  },
  "attachments": [
    {
      "type": "application_profile",
      "label": "Application profile",
      "url": "https://mff-uk.github.io/specifications/dcat-dap/dsv.ttl"
    },
    {
      "type": "shacl",
      "label": "SHACL validation rules",
      "url": "https://mff-uk.github.io/specifications/dcat-dap/shacl.ttl"
    },
    {
      "type": "documentation",
      "label": "Documentation",
      "url": "https://mff-uk.github.io/specifications/dcat-dap/"
    }
  ],
  "usedPrefixes": [
    {
      "prefix": "dcat",
      "iri": "http://www.w3.org/ns/dcat#"
    },
    {
      "prefix": "dcat-dap",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#"
    },
    {
      "prefix": "dcterms",
      "iri": "http://purl.org/dc/terms/"
    },
    {
      "prefix": "foaf",
      "iri": "http://xmlns.com/foaf/0.1/"
    },
    {
      "prefix": "odrl",
      "iri": "http://www.w3.org/ns/odrl/2/"
    },
    {
      "prefix": "prov",
      "iri": "http://www.w3.org/ns/prov#"
    },
    {
      "prefix": "adms",
      "iri": "http://www.w3.org/ns/adms#"
    },
    {
      "prefix": "spdx",
      "iri": "http://spdx.org/rdf/terms#"
    },
    {
      "prefix": "xsd",
      "iri": "http://www.w3.org/2001/XMLSchema#"
    },
    {
      "prefix": "skos",
      "iri": "http://www.w3.org/2004/02/skos/core#"
    },
    {
      "prefix": "locn",
      "iri": "http://www.w3.org/ns/locn#"
    },
    {
      "prefix": "time",
      "iri": "http://www.w3.org/2006/time#"
    },
    {
      "prefix": "rdfs",
      "iri": "http://www.w3.org/2000/01/rdf-schema#"
    },
    {
      "prefix": "vcard",
      "iri": "http://www.w3.org/2006/vcard/ns#"
    }
  ],
  "classes": [
    {
      "id": "catalog",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog",
      "label": "Catalog",
      "definition": "A curated collection of metadata about resources.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Catalog",
          "iri": "http://www.w3.org/ns/dcat#Catalog"
        },
        {
          "relation": "specializesClass",
          "label": "Dataset",
          "iri": "http://www.w3.org/ns/dcat#Dataset"
        },
        {
          "relation": "specializesClass",
          "label": "Catalogued resource",
          "iri": "http://www.w3.org/ns/dcat#Resource"
        },
        {
          "relation": "specializesClassProfile",
          "label": "Dataset",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset"
        },
        {
          "relation": "specializesClassProfile",
          "label": "Cataloged Resource",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "A Web-based data catalog is typically represented as a single instance of this class. Datasets and data services are examples of resources in the context of a data catalog.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#Catalog"
      },
      "properties": [
        {
          "id": "catalog",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog.catalog",
          "label": "catalog",
          "definition": "A catalog that is listed in the catalog.",
          "domain": "Catalog",
          "range": "Catalog",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "catalog",
              "iri": "http://www.w3.org/ns/dcat#catalog"
            },
            {
              "relation": "specializesProperty",
              "label": "resource",
              "iri": "http://www.w3.org/ns/dcat#resource"
            },
            {
              "relation": "specializesProperty",
              "label": "Has Part",
              "iri": "http://purl.org/dc/terms/hasPart"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#catalog"
          }
        },
        {
          "id": "dataset",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog.dataset",
          "label": "dataset",
          "definition": "A dataset that is listed in the catalog.",
          "domain": "Catalog",
          "range": "Dataset",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "dataset",
              "iri": "http://www.w3.org/ns/dcat#dataset"
            },
            {
              "relation": "specializesProperty",
              "label": "resource",
              "iri": "http://www.w3.org/ns/dcat#resource"
            },
            {
              "relation": "specializesProperty",
              "label": "Has Part",
              "iri": "http://purl.org/dc/terms/hasPart"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#dataset"
          }
        },
        {
          "id": "homepage",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog.homepage",
          "label": "homepage",
          "definition": "A homepage of the catalog (a public Web document usually available in HTML).",
          "domain": "Catalog",
          "range": "Document",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Document",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "homepage",
              "iri": "http://xmlns.com/foaf/0.1/homepage"
            },
            {
              "relation": "specializesProperty",
              "label": "is primary topic of",
              "iri": "http://xmlns.com/foaf/0.1/isPrimaryTopicOf"
            },
            {
              "relation": "specializesProperty",
              "label": "page",
              "iri": "http://xmlns.com/foaf/0.1/page"
            }
          ],
          "usageNote": "foaf:homepage is an inverse functional property (IFP) which means that it MUST be unique and precisely identify the Web-page for the resource.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://xmlns.com/foaf/0.1/homepage"
          }
        },
        {
          "id": "record",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog.record",
          "label": "record",
          "definition": "A record describing the registration of a single resource (e.g., a dataset, a data service) that is part of the catalog.",
          "domain": "Catalog",
          "range": "Catalog Record",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "record",
              "iri": "http://www.w3.org/ns/dcat#record"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#record"
          }
        },
        {
          "id": "resource",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog.resource",
          "label": "resource",
          "definition": "A resource that is listed in the catalog.",
          "domain": "Catalog",
          "range": "Cataloged Resource",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "resource",
              "iri": "http://www.w3.org/ns/dcat#resource"
            },
            {
              "relation": "specializesProperty",
              "label": "Has Part",
              "iri": "http://purl.org/dc/terms/hasPart"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "This is the most general predicate for membership of a catalog. Use of a more specific sub-property is recommended when available.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#resource"
          }
        },
        {
          "id": "service",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog.service",
          "label": "service",
          "definition": "A service that is listed in the catalog.",
          "domain": "Catalog",
          "range": "Data Service",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#DataService",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "service",
              "iri": "http://www.w3.org/ns/dcat#service"
            },
            {
              "relation": "specializesProperty",
              "label": "resource",
              "iri": "http://www.w3.org/ns/dcat#resource"
            },
            {
              "relation": "specializesProperty",
              "label": "Has Part",
              "iri": "http://purl.org/dc/terms/hasPart"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#service"
          }
        },
        {
          "id": "themeTaxonomy",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Catalog.themeTaxonomy",
          "label": "theme taxonomy",
          "definition": "A knowledge organization system (KOS) used to classify the resources documented in the catalog (e.g., datasets and services).",
          "domain": "Catalog",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "theme taxonomy",
              "iri": "http://www.w3.org/ns/dcat#themeTaxonomy"
            }
          ],
          "usageNote": "It is recommended that the taxonomy is organized in a skos:ConceptScheme, skos:Collection, owl:Ontology or similar.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#themeTaxonomy"
          }
        }
      ]
    },
    {
      "id": "catalogRecord",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord",
      "label": "Catalog Record",
      "definition": "A record in a catalog, describing the registration of a single dcat:Resource.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Catalog Record",
          "iri": "http://www.w3.org/ns/dcat#CatalogRecord"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "This class is optional and not all catalogs will use it. It exists for catalogs where a distinction is made between metadata about a dataset or service and metadata about the entry in the catalog about the dataset or service.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#CatalogRecord"
      },
      "properties": [
        {
          "id": "conformsTo",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord.conformsTo",
          "label": "conforms to",
          "definition": "An established standard to which the described resource conforms.",
          "domain": "Catalog Record",
          "range": "Standard",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Standard",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Conforms To",
              "iri": "http://purl.org/dc/terms/conformsTo"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "This property SHOULD be used to indicate the model, schema, ontology, view or profile that the catalog record metadata conforms to.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/conformsTo"
          }
        },
        {
          "id": "description",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord.description",
          "label": "description",
          "definition": "A free-text account of the record.",
          "domain": "Catalog Record",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Description",
              "iri": "http://purl.org/dc/terms/description"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/description"
          }
        },
        {
          "id": "listingDate",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord.listingDate",
          "label": "listing date",
          "definition": "The date of listing (i.e., formal recording) of the corresponding dataset or service in the catalog.",
          "domain": "Catalog Record",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Date Issued",
              "iri": "http://purl.org/dc/terms/issued"
            },
            {
              "relation": "specializesProperty",
              "label": "Date",
              "iri": "http://purl.org/dc/terms/date"
            }
          ],
          "usageNote": "This indicates the date of listing the dataset in the catalog and not the publication date of the dataset itself.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/issued"
          }
        },
        {
          "id": "primaryTopic",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord.primaryTopic",
          "label": "primary topic",
          "definition": "The dcat:Resource (dataset or service) described in the record.",
          "domain": "Catalog Record",
          "range": "Cataloged Resource",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "primary topic",
              "iri": "http://xmlns.com/foaf/0.1/primaryTopic"
            }
          ],
          "usageNote": "foaf:primaryTopic property is functional: each catalog record can have at most one primary topic.",
          "cardinality": "0..1",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://xmlns.com/foaf/0.1/primaryTopic"
          }
        },
        {
          "id": "title",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord.title",
          "label": "title",
          "definition": "A name given to the record.",
          "domain": "Catalog Record",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Title",
              "iri": "http://purl.org/dc/terms/title"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/title"
          }
        },
        {
          "id": "updateModificationDate",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogRecord.update-modificationDate",
          "label": "update/modification date",
          "definition": "Most recent date on which the catalog entry was changed, updated or modified.",
          "domain": "Catalog Record",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Date Modified",
              "iri": "http://purl.org/dc/terms/modified"
            },
            {
              "relation": "specializesProperty",
              "label": "Date",
              "iri": "http://purl.org/dc/terms/date"
            }
          ],
          "usageNote": "This indicates the date of last change of a catalog entry, i.e., the catalog metadata description of the dataset, and not the date of the dataset itself.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/modified"
          }
        }
      ]
    },
    {
      "id": "catalogedResource",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource",
      "label": "Cataloged Resource",
      "definition": "Resource published or curated by a single agent.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Catalogued resource",
          "iri": "http://www.w3.org/ns/dcat#Resource"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "The class of all cataloged resources, the super-class of dcat:Dataset, dcat:DataService, dcat:Catalog and any other member of a dcat:Catalog.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#Resource"
      },
      "properties": [
        {
          "id": "accessRights",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.accessRights",
          "label": "access rights",
          "definition": "Information about who access the resource or an indication of its security status.",
          "domain": "Cataloged Resource",
          "range": "Rights Statement",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#RightsStatement",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Access Rights",
              "iri": "http://purl.org/dc/terms/accessRights"
            },
            {
              "relation": "specializesProperty",
              "label": "Rights",
              "iri": "http://purl.org/dc/terms/rights"
            }
          ],
          "usageNote": "Information about licenses and rights MAY be provided for the Resource.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/accessRights"
          }
        },
        {
          "id": "conformsTo",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.conformsTo",
          "label": "conforms to",
          "definition": "An established standard to which the described resource conforms.",
          "domain": "Cataloged Resource",
          "range": "Standard",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Standard",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Conforms To",
              "iri": "http://purl.org/dc/terms/conformsTo"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "This property SHOULD be used to indicate the model, schema, ontology, view or profile that the cataloged resource content conforms to.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/conformsTo"
          }
        },
        {
          "id": "contactPoint",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.contactPoint",
          "label": "contact point",
          "definition": "Relevant contact information for the catalogued resource. Use of vCard is recommended.",
          "domain": "Cataloged Resource",
          "range": "Kind",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Kind",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "contact point",
              "iri": "http://www.w3.org/ns/dcat#contactPoint"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#contactPoint"
          }
        },
        {
          "id": "creator",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.creator",
          "label": "creator",
          "definition": "An entity responsible for making the resource.",
          "domain": "Cataloged Resource",
          "range": "Agent",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Agent",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Creator",
              "iri": "http://purl.org/dc/terms/creator"
            },
            {
              "relation": "specializesProperty",
              "label": "Contributor",
              "iri": "http://purl.org/dc/terms/contributor"
            }
          ],
          "usageNote": "Resources of type foaf:Agent are recommended as values for this property.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/creator"
          }
        },
        {
          "id": "description",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.description",
          "label": "description",
          "definition": "A free-text account of the resource.",
          "domain": "Cataloged Resource",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Description",
              "iri": "http://purl.org/dc/terms/description"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/description"
          }
        },
        {
          "id": "first",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.first",
          "label": "first",
          "definition": "The first resource in an ordered collection or series of resources, to which the current resource belongs.",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "first",
              "iri": "http://www.w3.org/ns/dcat#first"
            }
          ],
          "usageNote": "In DCAT this property is used for resources belonging to a dcat:DatasetSeries.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#first"
          }
        },
        {
          "id": "hasCurrentVersion",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.hasCurrentVersion",
          "label": "has current version",
          "definition": "This resource has a more specific, versioned resource with equivalent content [PAV].",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "has current version",
              "iri": "http://www.w3.org/ns/dcat#hasCurrentVersion"
            }
          ],
          "usageNote": "This property is intended for relating a non-versioned or abstract resource to a single snapshot that can be used as a permalink.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#hasCurrentVersion"
          }
        },
        {
          "id": "hasPart",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.hasPart",
          "label": "has part",
          "definition": "A related resource that is included either physically or logically in the described resource.",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Has Part",
              "iri": "http://purl.org/dc/terms/hasPart"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/hasPart"
          }
        },
        {
          "id": "hasPolicy",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.hasPolicy",
          "label": "has policy",
          "definition": "An ODRL conformant policy expressing the rights associated with the resource.",
          "domain": "Cataloged Resource",
          "range": "Policy",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Policy",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Target Policy",
              "iri": "http://www.w3.org/ns/odrl/2/hasPolicy"
            }
          ],
          "usageNote": "Information about rights expressed as an ODRL policy MAY be provided for the resource.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/odrl/2/hasPolicy"
          }
        },
        {
          "id": "hasVersion",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.hasVersion",
          "label": "has version",
          "definition": "This resource has a more specific, versioned resource [PAV].",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "has version",
              "iri": "http://www.w3.org/ns/dcat#hasVersion"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#hasVersion"
          }
        },
        {
          "id": "identifier",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.identifier",
          "label": "identifier",
          "definition": "A unique identifier of the resource being described or cataloged.",
          "domain": "Cataloged Resource",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Identifier",
              "iri": "http://purl.org/dc/terms/identifier"
            }
          ],
          "usageNote": "The identifier is a text string which is assigned to the resource to provide an unambiguous reference within a particular context.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/identifier"
          }
        },
        {
          "id": "keyword",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.keyword",
          "label": "keyword/tag",
          "definition": "A keyword or tag describing a resource.",
          "domain": "Cataloged Resource",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "keyword",
              "iri": "http://www.w3.org/ns/dcat#keyword"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#keyword"
          }
        },
        {
          "id": "landingPage",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.landingPage",
          "label": "landing page",
          "definition": "A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information.",
          "domain": "Cataloged Resource",
          "range": "Document",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Document",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "landing page",
              "iri": "http://www.w3.org/ns/dcat#landingPage"
            },
            {
              "relation": "specializesProperty",
              "label": "page",
              "iri": "http://xmlns.com/foaf/0.1/page"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#landingPage"
          }
        },
        {
          "id": "language",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.language",
          "label": "language",
          "definition": "A language of the resource.",
          "domain": "Cataloged Resource",
          "range": "Linguistic System",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#LinguisticSystem",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Language",
              "iri": "http://purl.org/dc/terms/language"
            }
          ],
          "usageNote": "Repeat this property if the resource is available in multiple languages.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/language"
          }
        },
        {
          "id": "last",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.last",
          "label": "last",
          "definition": "The last resource in an ordered collection or series of resources, to which the current resource belongs.",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "last",
              "iri": "http://www.w3.org/ns/dcat#last"
            }
          ],
          "usageNote": "In DCAT this property is used for resources belonging to a dcat:DatasetSeries.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#last"
          }
        },
        {
          "id": "license",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.license",
          "label": "license",
          "definition": "A legal document under which the resource is made available.",
          "domain": "Cataloged Resource",
          "range": "License Document",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#LicenseDocument",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "License",
              "iri": "http://purl.org/dc/terms/license"
            },
            {
              "relation": "specializesProperty",
              "label": "Rights",
              "iri": "http://purl.org/dc/terms/rights"
            }
          ],
          "usageNote": "Information about licenses and rights MAY be provided for the Resource.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/license"
          }
        },
        {
          "id": "previous",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.previous",
          "label": "previous",
          "definition": "The previous resource (before the current one) in an ordered collection or series of resources.",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "previous",
              "iri": "http://www.w3.org/ns/dcat#prev"
            }
          ],
          "usageNote": "Different from dcat:previousVersion; this denotes a distinct resource immediately preceding the current one in an ordered collection.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#prev"
          }
        },
        {
          "id": "previousVersion",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.previousVersion",
          "label": "previous version",
          "definition": "The previous version of a resource in a lineage [PAV].",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "previous version",
              "iri": "http://www.w3.org/ns/dcat#previousVersion"
            },
            {
              "relation": "specializesProperty",
              "label": "wasRevisionOf",
              "iri": "http://www.w3.org/ns/prov#wasRevisionOf"
            },
            {
              "relation": "specializesProperty",
              "label": "wasDerivedFrom",
              "iri": "http://www.w3.org/ns/prov#wasDerivedFrom"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#previousVersion"
          }
        },
        {
          "id": "publisher",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.publisher",
          "label": "publisher",
          "definition": "An entity responsible for making the resource available.",
          "domain": "Cataloged Resource",
          "range": "Agent",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Agent",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Publisher",
              "iri": "http://purl.org/dc/terms/publisher"
            }
          ],
          "usageNote": "Resources of type foaf:Agent are recommended as values for this property.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/publisher"
          }
        },
        {
          "id": "qualifiedAttribution",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.qualifiedAttribution",
          "label": "qualified attribution",
          "definition": "Link to an Agent having some form of responsibility for the resource",
          "domain": "Cataloged Resource",
          "range": "Attribution",
          "rangeIri": "http://www.w3.org/ns/prov#Attribution",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "qualifiedAttribution",
              "iri": "http://www.w3.org/ns/prov#qualifiedAttribution"
            },
            {
              "relation": "specializesProperty",
              "label": "qualifiedInfluence",
              "iri": "http://www.w3.org/ns/prov#qualifiedInfluence"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/prov#qualifiedAttribution"
          }
        },
        {
          "id": "relation",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.relation",
          "label": "relation",
          "definition": "A related resource.",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "Use where the nature of the relationship is not known; a more specific sub-property SHOULD be used if known.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/relation"
          }
        },
        {
          "id": "replaces",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.replaces",
          "label": "replaces",
          "definition": "A related resource that is supplanted, displaced, or superseded by the described resource.",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Replaces",
              "iri": "http://purl.org/dc/terms/replaces"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/replaces"
          }
        },
        {
          "id": "rights",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.rights",
          "label": "rights",
          "definition": "A statement that concerns all rights not addressed with dcterms:license or dcterms:accessRights, such as copyright statements.",
          "domain": "Cataloged Resource",
          "range": "Rights Statement",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#RightsStatement",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Rights",
              "iri": "http://purl.org/dc/terms/rights"
            }
          ],
          "usageNote": "Information about licenses and rights MAY be provided for the Resource.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/rights"
          }
        },
        {
          "id": "status",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.status",
          "label": "status",
          "definition": "The status of the resource in the context of a particular workflow process [VOCAB-ADMS].",
          "domain": "Cataloged Resource",
          "range": "Concept",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Concept",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "status",
              "iri": "http://www.w3.org/ns/adms#status"
            }
          ],
          "usageNote": "DCAT does not prescribe the use of any specific set of life-cycle statuses.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/adms#status"
          }
        },
        {
          "id": "themeCategory",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.theme-category",
          "label": "theme/category",
          "definition": "A main category of the resource. A resource can have multiple themes.",
          "domain": "Cataloged Resource",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "theme",
              "iri": "http://www.w3.org/ns/dcat#theme"
            },
            {
              "relation": "specializesProperty",
              "label": "Subject",
              "iri": "http://purl.org/dc/terms/subject"
            }
          ],
          "usageNote": "The set of themes used to categorize the resources are organized in a skos:ConceptScheme, skos:Collection, owl:Ontology or similar.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#theme"
          }
        },
        {
          "id": "title",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.title",
          "label": "title",
          "definition": "A name given to the resource.",
          "domain": "Cataloged Resource",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Title",
              "iri": "http://purl.org/dc/terms/title"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/title"
          }
        },
        {
          "id": "typeGenre",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.type-genre",
          "label": "type/genre",
          "definition": "The nature or genre of the resource.",
          "domain": "Cataloged Resource",
          "range": "Class",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Class",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Type",
              "iri": "http://purl.org/dc/terms/type"
            }
          ],
          "usageNote": "The value SHOULD be taken from a well governed and broadly recognised controlled vocabulary.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/type"
          }
        },
        {
          "id": "updateModificationDate",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.update-modificationDate",
          "label": "update/modification date",
          "definition": "Most recent date on which the resource was changed, updated or modified.",
          "domain": "Cataloged Resource",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Date Modified",
              "iri": "http://purl.org/dc/terms/modified"
            },
            {
              "relation": "specializesProperty",
              "label": "Date",
              "iri": "http://purl.org/dc/terms/date"
            }
          ],
          "usageNote": "The value of this property indicates a change to the actual resource, not a change to the catalog record.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/modified"
          }
        },
        {
          "id": "versionInfo",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource.versionInfo",
          "label": "version notes",
          "definition": "A description of changes between this version and the previous version of the resource [VOCAB-ADMS].",
          "domain": "Cataloged Resource",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "version info",
              "iri": "http://www.w3.org/ns/adms#versionNotes"
            }
          ],
          "usageNote": "In case of backward compatibility issues with the previous version of the resource, a textual description SHOULD be specified.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/adms#versionNotes"
          }
        }
      ]
    },
    {
      "id": "checksum",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Checksum",
      "label": "Checksum",
      "definition": "A Checksum is value that allows the contents of a file to be authenticated.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Checksum",
          "iri": "http://spdx.org/rdf/terms#Checksum"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://spdx.org/rdf/terms#Checksum"
      },
      "properties": [
        {
          "id": "algorithm",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Checksum.algorithm",
          "label": "algorithm",
          "definition": "Identifies the algorithm used to produce the subject Checksum [SPDX].",
          "domain": "Checksum",
          "range": "Checksum Algorithm",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#ChecksumAlgorithm",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "algorithm",
              "iri": "http://spdx.org/rdf/terms#algorithm"
            }
          ],
          "usageNote": "Version 2.2 of SPDX defines individuals for MD2, MD4, MD5, MD6, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://spdx.org/rdf/terms#algorithm"
          }
        },
        {
          "id": "checksumValue",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Checksum.checksumValue",
          "label": "checksum value",
          "definition": "The checksumValue property provides a lower case hexidecimal encoded digest value produced using a specific algorithm.",
          "domain": "Checksum",
          "range": "xsd:hexBinary",
          "rangeIri": "http://www.w3.org/2001/XMLSchema#hexBinary",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "checksumValue",
              "iri": "http://spdx.org/rdf/terms#checksumValue"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://spdx.org/rdf/terms#checksumValue"
          }
        }
      ]
    },
    {
      "id": "concept",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Concept",
      "label": "Concept",
      "definition": "A category or a theme used to describe datasets in the catalog.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Concept",
          "iri": "http://www.w3.org/2004/02/skos/core#Concept"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/2004/02/skos/core#Concept"
      },
      "properties": []
    },
    {
      "id": "conceptScheme",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#ConceptScheme",
      "label": "Concept Scheme",
      "definition": "A knowledge organization system (KOS) used to represent themes/categories of datasets in the catalog.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Concept Scheme",
          "iri": "http://www.w3.org/2004/02/skos/core#ConceptScheme"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/2004/02/skos/core#ConceptScheme"
      },
      "properties": []
    },
    {
      "id": "dataService",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#DataService",
      "label": "Data Service",
      "definition": "A collection of operations that provides access to one or more datasets or data processing functions.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Data service",
          "iri": "http://www.w3.org/ns/dcat#DataService"
        },
        {
          "relation": "specializesClass",
          "label": "Catalogued resource",
          "iri": "http://www.w3.org/ns/dcat#Resource"
        },
        {
          "relation": "specializesClassProfile",
          "label": "Cataloged Resource",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "If a dcat:DataService is bound to one or more specified Datasets, they are indicated by the dcat:servesDataset property.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#DataService"
      },
      "properties": [
        {
          "id": "endpointDescription",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#DataService.endpointDescription",
          "label": "endpoint description",
          "definition": "A description of the service end-point, including its operations, parameters etc.",
          "domain": "Data Service",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "description of service end-point",
              "iri": "http://www.w3.org/ns/dcat#endpointDescription"
            }
          ],
          "usageNote": "May be expressed in machine-readable form such as OpenAPI, GetCapabilities, SPARQL Service Description, OpenSearch or WSDL.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#endpointDescription"
          }
        },
        {
          "id": "endpointUrl",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#DataService.endpointUrl",
          "label": "endpoint URL",
          "definition": "The root location or primary endpoint of the service (a web-resolvable IRI).",
          "domain": "Data Service",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "service end-point",
              "iri": "http://www.w3.org/ns/dcat#endpointURL"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#endpointURL"
          }
        },
        {
          "id": "servesDataset",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#DataService.servesDataset",
          "label": "serves dataset",
          "definition": "A collection of data that this DataService can distribute.",
          "domain": "Data Service",
          "range": "Dataset",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "serves dataset",
              "iri": "http://www.w3.org/ns/dcat#servesDataset"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#servesDataset"
          }
        }
      ]
    },
    {
      "id": "dataset",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset",
      "label": "Dataset",
      "definition": "A collection of data, published or curated by a single source, and available for access or download in one or more representations.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Dataset",
          "iri": "http://www.w3.org/ns/dcat#Dataset"
        },
        {
          "relation": "specializesClass",
          "label": "Catalogued resource",
          "iri": "http://www.w3.org/ns/dcat#Resource"
        },
        {
          "relation": "specializesClassProfile",
          "label": "Cataloged Resource",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#Dataset"
      },
      "properties": [
        {
          "id": "distribution",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.distribution",
          "label": "distribution",
          "definition": "An available distribution of the dataset.",
          "domain": "Dataset",
          "range": "Distribution",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "distribution",
              "iri": "http://www.w3.org/ns/dcat#distribution"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#distribution"
          }
        },
        {
          "id": "frequency",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.frequency",
          "label": "frequency",
          "definition": "The frequency at which a dataset is published.",
          "domain": "Dataset",
          "range": "Frequency",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Frequency",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Accrual Periodicity",
              "iri": "http://purl.org/dc/terms/accrualPeriodicity"
            }
          ],
          "usageNote": "The value gives the rate at which the dataset-as-a-whole is updated.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/accrualPeriodicity"
          }
        },
        {
          "id": "inSeries",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.inSeries",
          "label": "in series",
          "definition": "A dataset series of which the dataset is part.",
          "domain": "Dataset",
          "range": "Dataset Series",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#DatasetSeries",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "in series",
              "iri": "http://www.w3.org/ns/dcat#inSeries"
            },
            {
              "relation": "specializesProperty",
              "label": "Is Part Of",
              "iri": "http://purl.org/dc/terms/isPartOf"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#inSeries"
          }
        },
        {
          "id": "spatialResolution",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.spatialResolution",
          "label": "spatial resolution",
          "definition": "Minimum spatial separation resolvable in a dataset, measured in meters.",
          "domain": "Dataset",
          "range": "xsd:decimal",
          "rangeIri": "http://www.w3.org/2001/XMLSchema#decimal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "spatialResolutionInMeters",
              "iri": "http://www.w3.org/ns/dcat#spatialResolutionInMeters"
            }
          ],
          "usageNote": "If the dataset is an image or grid this should correspond to the spacing of items.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#spatialResolutionInMeters"
          }
        },
        {
          "id": "spatialGeographicalCoverage",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.spatial-geographicalCoverage",
          "label": "spatial/geographical coverage",
          "definition": "The geographical area covered by the dataset.",
          "domain": "Dataset",
          "range": "Location",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Location",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Spatial Coverage",
              "iri": "http://purl.org/dc/terms/spatial"
            },
            {
              "relation": "specializesProperty",
              "label": "Coverage",
              "iri": "http://purl.org/dc/terms/coverage"
            }
          ],
          "usageNote": "The spatial coverage of a dataset may be encoded as an instance of dcterms:Location.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/spatial"
          }
        },
        {
          "id": "temporalCoverage",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.temporalCoverage",
          "label": "temporal coverage",
          "definition": "The temporal period that the dataset covers.",
          "domain": "Dataset",
          "range": "Period of Time",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#PeriodOfTime",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Temporal Coverage",
              "iri": "http://purl.org/dc/terms/temporal"
            },
            {
              "relation": "specializesProperty",
              "label": "Coverage",
              "iri": "http://purl.org/dc/terms/coverage"
            }
          ],
          "usageNote": "The temporal coverage of a dataset may be encoded as an instance of dcterms:PeriodOfTime.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/temporal"
          }
        },
        {
          "id": "temporalResolution",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.temporalResolution",
          "label": "temporal resolution",
          "definition": "Minimum time period resolvable in the dataset.",
          "domain": "Dataset",
          "range": "xsd:duration",
          "rangeIri": "http://www.w3.org/2001/XMLSchema#duration",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "temporal resolution",
              "iri": "http://www.w3.org/ns/dcat#temporalResolution"
            }
          ],
          "usageNote": "If the dataset is a time-series this should correspond to the spacing of items in the series.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#temporalResolution"
          }
        },
        {
          "id": "wasGeneratedBy",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset.wasGeneratedBy",
          "label": "was generated by",
          "definition": "An activity that generated, or provides the business context for, the creation of the dataset.",
          "domain": "Dataset",
          "range": "Entity",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Entity",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "wasGeneratedBy",
              "iri": "http://www.w3.org/ns/prov#wasGeneratedBy"
            },
            {
              "relation": "specializesProperty",
              "label": "wasInfluencedBy",
              "iri": "http://www.w3.org/ns/prov#wasInfluencedBy"
            }
          ],
          "usageNote": "The activity associated with generation of a dataset will typically be an initiative, project, mission, survey, or ongoing activity.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/prov#wasGeneratedBy"
          }
        }
      ]
    },
    {
      "id": "datasetSeries",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#DatasetSeries",
      "label": "Dataset Series",
      "definition": "A collection of datasets that are published separately, but share some characteristics that group them.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Dataset series",
          "iri": "http://www.w3.org/ns/dcat#DatasetSeries"
        },
        {
          "relation": "specializesClass",
          "label": "Dataset",
          "iri": "http://www.w3.org/ns/dcat#Dataset"
        },
        {
          "relation": "specializesClass",
          "label": "Catalogued resource",
          "iri": "http://www.w3.org/ns/dcat#Resource"
        },
        {
          "relation": "specializesClassProfile",
          "label": "Dataset",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset"
        },
        {
          "relation": "specializesClassProfile",
          "label": "Cataloged Resource",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "Dataset series can also be soft-typed via property dcterms:type as in the approach used in GeoDCAT-AP and related profiles.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#DatasetSeries"
      },
      "properties": []
    },
    {
      "id": "distribution",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution",
      "label": "Distribution",
      "definition": "A specific representation of a dataset.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Distribution",
          "iri": "http://www.w3.org/ns/dcat#Distribution"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "This represents a general availability of a dataset. The use of dcat:downloadURL indicates directly downloadable distributions.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#Distribution"
      },
      "properties": [
        {
          "id": "accessRights",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.accessRights",
          "label": "access rights",
          "definition": "A rights statement that concerns how the distribution is accessed.",
          "domain": "Distribution",
          "range": "Rights Statement",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#RightsStatement",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Access Rights",
              "iri": "http://purl.org/dc/terms/accessRights"
            },
            {
              "relation": "specializesProperty",
              "label": "Rights",
              "iri": "http://purl.org/dc/terms/rights"
            }
          ],
          "usageNote": "Information about licenses and rights MAY be provided for the Distribution.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/accessRights"
          }
        },
        {
          "id": "byteSize",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.byteSize",
          "label": "byte size",
          "definition": "The size of a distribution in bytes.",
          "domain": "Distribution",
          "range": "xsd:nonNegativeInteger",
          "rangeIri": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "byte size",
              "iri": "http://www.w3.org/ns/dcat#byteSize"
            }
          ],
          "usageNote": "The size in bytes can be approximated when the precise size is not known.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#byteSize"
          }
        },
        {
          "id": "checksum",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.checksum",
          "label": "checksum",
          "definition": "Checksum for a downloadable representation.",
          "domain": "Distribution",
          "range": "Checksum",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Checksum",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "checksum",
              "iri": "http://spdx.org/rdf/terms#checksum"
            }
          ],
          "usageNote": "The checksum is related to the download URL.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://spdx.org/rdf/terms#checksum"
          }
        },
        {
          "id": "compressionFormat",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.compressionFormat",
          "label": "compression format",
          "definition": "The compression format of the distribution in which the data is contained in a compressed form.",
          "domain": "Distribution",
          "range": "Media Type",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#MediaType",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "compressFormat",
              "iri": "http://www.w3.org/ns/dcat#compressFormat"
            }
          ],
          "usageNote": "Use when the files in the distribution are compressed, e.g., in a ZIP file.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#compressFormat"
          }
        },
        {
          "id": "conformsTo",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.conformsTo",
          "label": "conforms to",
          "definition": "An established standard to which the distribution conforms.",
          "domain": "Distribution",
          "range": "Standard",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Standard",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Conforms To",
              "iri": "http://purl.org/dc/terms/conformsTo"
            },
            {
              "relation": "specializesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "Use to indicate the model, schema, ontology, view or profile that this representation of a dataset conforms to.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/conformsTo"
          }
        },
        {
          "id": "description",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.description",
          "label": "description",
          "definition": "A free-text account of the distribution.",
          "domain": "Distribution",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Description",
              "iri": "http://purl.org/dc/terms/description"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/description"
          }
        },
        {
          "id": "downloadUrl",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.downloadUrl",
          "label": "download URL",
          "definition": "The URL of the downloadable file in a given format.",
          "domain": "Distribution",
          "range": "Resource",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Resource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "download URL",
              "iri": "http://www.w3.org/ns/dcat#downloadURL"
            }
          ],
          "usageNote": "SHOULD be used for the URL at which this distribution is available directly, typically through an HTTP GET request.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#downloadURL"
          }
        },
        {
          "id": "format",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.format",
          "label": "format",
          "definition": "The file format of the distribution.",
          "domain": "Distribution",
          "range": "Media Type or Extent",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#MediaTypeOrExtent",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Format",
              "iri": "http://purl.org/dc/terms/format"
            }
          ],
          "usageNote": "dcat:mediaType SHOULD be used if the type of the distribution is defined by IANA.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/format"
          }
        },
        {
          "id": "hasPolicy",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.hasPolicy",
          "label": "has policy",
          "definition": "An ODRL conformant policy expressing the rights associated with the distribution.",
          "domain": "Distribution",
          "range": "Policy",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Policy",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Target Policy",
              "iri": "http://www.w3.org/ns/odrl/2/hasPolicy"
            }
          ],
          "usageNote": "Information about rights expressed as an ODRL policy MAY be provided for the distribution.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/odrl/2/hasPolicy"
          }
        },
        {
          "id": "license",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.license",
          "label": "license",
          "definition": "A legal document under which the distribution is made available.",
          "domain": "Distribution",
          "range": "License Document",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#LicenseDocument",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "License",
              "iri": "http://purl.org/dc/terms/license"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/license"
          }
        },
        {
          "id": "mediaType",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.mediaType",
          "label": "media type",
          "definition": "The media type of the distribution as defined by IANA",
          "domain": "Distribution",
          "range": "Media Type",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#MediaType",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "media type",
              "iri": "http://www.w3.org/ns/dcat#mediaType"
            },
            {
              "relation": "specializesProperty",
              "label": "Format",
              "iri": "http://purl.org/dc/terms/format"
            }
          ],
          "usageNote": "SHOULD be used when the media type of the distribution is defined in IANA.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#mediaType"
          }
        },
        {
          "id": "packagingFormat",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.packagingFormat",
          "label": "packaging format",
          "definition": "The package format of the distribution in which one or more data files are grouped together.",
          "domain": "Distribution",
          "range": "Media Type",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#MediaType",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "packaging format",
              "iri": "http://www.w3.org/ns/dcat#packageFormat"
            },
            {
              "relation": "specializesProperty",
              "label": "Format",
              "iri": "http://purl.org/dc/terms/format"
            }
          ],
          "usageNote": "Use when files in the distribution are packaged, e.g., TAR, ZIP, Frictionless Data Package or BagIt.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#packageFormat"
          }
        },
        {
          "id": "releaseDate",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.releaseDate",
          "label": "release date",
          "definition": "Date of formal issuance of the resource.",
          "domain": "Distribution",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Date Issued",
              "iri": "http://purl.org/dc/terms/issued"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/issued"
          }
        },
        {
          "id": "rights",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.rights",
          "label": "rights",
          "definition": "Information about rights held in and over the distribution.",
          "domain": "Distribution",
          "range": "Rights Statement",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#RightsStatement",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Rights",
              "iri": "http://purl.org/dc/terms/rights"
            }
          ],
          "usageNote": "dcterms:rights allows linking to a rights statement that can include licensing information as well as other information that supplements the license.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/rights"
          }
        },
        {
          "id": "title",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.title",
          "label": "title",
          "definition": "A name given to the distribution.",
          "domain": "Distribution",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Title",
              "iri": "http://purl.org/dc/terms/title"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/title"
          }
        },
        {
          "id": "updateModificationDate",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Distribution.update-modificationDate",
          "label": "update/modification date",
          "definition": "Date on which the resource was changed.",
          "domain": "Distribution",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Date Modified",
              "iri": "http://purl.org/dc/terms/modified"
            },
            {
              "relation": "specializesProperty",
              "label": "Date",
              "iri": "http://purl.org/dc/terms/date"
            }
          ],
          "usageNote": "",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/modified"
          }
        }
      ]
    },
    {
      "id": "location",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Location",
      "label": "Location",
      "definition": "A spatial region or named place.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Location",
          "iri": "http://purl.org/dc/terms/Location"
        },
        {
          "relation": "specializesClass",
          "label": "Location, Period, or Jurisdiction",
          "iri": "http://purl.org/dc/terms/LocationPeriodOrJurisdiction"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "For an extensive geometry the property locn:geometry SHOULD be used. For a geographic bounding box use dcat:bbox. For the geographic center use dcat:centroid.",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/Location"
      },
      "properties": [
        {
          "id": "boundingBox",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Location.boundingBox",
          "label": "bounding box",
          "definition": "The geographic bounding box of a spatial thing [SDW-BP].",
          "domain": "Location",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "bounding box",
              "iri": "http://www.w3.org/ns/dcat#bbox"
            }
          ],
          "usageNote": "The range is intentionally generic to allow different geometry literal encodings.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#bbox"
          }
        },
        {
          "id": "centroid",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Location.centroid",
          "label": "centroid",
          "definition": "The geographic center (centroid) of a spatial thing [SDW-BP].",
          "domain": "Location",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "centroid",
              "iri": "http://www.w3.org/ns/dcat#centroid"
            }
          ],
          "usageNote": "The range is intentionally generic to allow different geometry literal encodings.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#centroid"
          }
        },
        {
          "id": "geometry",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Location.geometry",
          "label": "geometry",
          "definition": "Associates a spatial thing [SDW-BP] with a corresponding geometry.",
          "domain": "Location",
          "range": "Geometry",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Geometry",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "geometry",
              "iri": "http://www.w3.org/ns/locn#geometry"
            }
          ],
          "usageNote": "The range allows for any type of geometry specification.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/locn#geometry"
          }
        }
      ]
    },
    {
      "id": "organization",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Organization",
      "label": "Organization",
      "definition": "An organization.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Organization",
          "iri": "http://xmlns.com/foaf/0.1/Organization"
        },
        {
          "relation": "specializesClass",
          "label": "Agent",
          "iri": "http://xmlns.com/foaf/0.1/Agent"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "FOAF provides several properties to describe these entities.",
      "source": {
        "type": "inherited",
        "from": "http://xmlns.com/foaf/0.1/Organization"
      },
      "properties": []
    },
    {
      "id": "periodOfTime",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#PeriodOfTime",
      "label": "Period of Time",
      "definition": "An interval of time that is named or defined by its start and end.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Period of Time",
          "iri": "http://purl.org/dc/terms/PeriodOfTime"
        },
        {
          "relation": "specializesClass",
          "label": "Location, Period, or Jurisdiction",
          "iri": "http://purl.org/dc/terms/LocationPeriodOrJurisdiction"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "The start and end of the interval SHOULD be given by using properties dcat:startDate or time:hasBeginning, and dcat:endDate or time:hasEnd, respectively.",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/PeriodOfTime"
      },
      "properties": [
        {
          "id": "beginning",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#PeriodOfTime.beginning",
          "label": "beginning",
          "definition": "Beginning of a period or interval.",
          "domain": "Period of Time",
          "range": "Time instant",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Instant",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "has beginning",
              "iri": "http://www.w3.org/2006/time#hasBeginning"
            },
            {
              "relation": "specializesProperty",
              "label": "has time",
              "iri": "http://www.w3.org/2006/time#hasTime"
            }
          ],
          "usageNote": "Use of time:hasBeginning entails that the value of dcterms:temporal is a member of time:TemporalEntity.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/2006/time#hasBeginning"
          }
        },
        {
          "id": "end",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#PeriodOfTime.end",
          "label": "end",
          "definition": "End of a period or interval.",
          "domain": "Period of Time",
          "range": "Time instant",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Instant",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "has end",
              "iri": "http://www.w3.org/2006/time#hasEnd"
            },
            {
              "relation": "specializesProperty",
              "label": "has time",
              "iri": "http://www.w3.org/2006/time#hasTime"
            }
          ],
          "usageNote": "Use of time:hasEnd entails that the value of dcterms:temporal is a member of time:TemporalEntity.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/2006/time#hasEnd"
          }
        },
        {
          "id": "endDate",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#PeriodOfTime.endDate",
          "label": "end date",
          "definition": "The end of the period.",
          "domain": "Period of Time",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "end date",
              "iri": "http://www.w3.org/ns/dcat#endDate"
            }
          ],
          "usageNote": "Literal encoded using relevant ISO 8601 Date and Time compliant string.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#endDate"
          }
        },
        {
          "id": "startDate",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#PeriodOfTime.startDate",
          "label": "start date",
          "definition": "The start of the period.",
          "domain": "Period of Time",
          "range": "Literal",
          "rangeIri": "http://www.w3.org/2000/01/rdf-schema#Literal",
          "type": "literal",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "start date",
              "iri": "http://www.w3.org/ns/dcat#startDate"
            }
          ],
          "usageNote": "Literal encoded using relevant ISO 8601 Date and Time compliant string.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#startDate"
          }
        }
      ]
    },
    {
      "id": "person",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Person",
      "label": "Person",
      "definition": "A person.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Person",
          "iri": "http://xmlns.com/foaf/0.1/Person"
        },
        {
          "relation": "specializesClass",
          "label": "Spatial Thing",
          "iri": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
        },
        {
          "relation": "specializesClass",
          "label": "Agent",
          "iri": "http://xmlns.com/foaf/0.1/Agent"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "FOAF provides several properties to describe these entities.",
      "source": {
        "type": "inherited",
        "from": "http://xmlns.com/foaf/0.1/Person"
      },
      "properties": []
    },
    {
      "id": "relationship",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Relationship",
      "label": "Relationship",
      "definition": "An association class for attaching additional information to a relationship between DCAT Resources.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Relationship",
          "iri": "http://www.w3.org/ns/dcat#Relationship"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "Use to characterize a relationship between datasets and other resources where the nature of the relationship is known but is not adequately characterized by standard DCTERMS or PROV-O properties.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#Relationship"
      },
      "properties": [
        {
          "id": "hadRole",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Relationship.hadRole",
          "label": "had role",
          "definition": "The function of an entity or agent with respect to another entity or resource.",
          "domain": "Relationship",
          "range": "Role",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#Role",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "hadRole",
              "iri": "http://www.w3.org/ns/dcat#hadRole"
            }
          ],
          "usageNote": "It is recommended that the value be taken from a controlled vocabulary of roles.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://www.w3.org/ns/dcat#hadRole"
          }
        },
        {
          "id": "relation",
          "iri": "https://mff-uk.github.io/specifications/dcat-dap#Relationship.relation",
          "label": "relation",
          "definition": "The resource related to the source resource.",
          "domain": "Relationship",
          "range": "Cataloged Resource",
          "rangeIri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource",
          "type": "object",
          "hierarchy": [
            {
              "relation": "profilesProperty",
              "label": "Relation",
              "iri": "http://purl.org/dc/terms/relation"
            }
          ],
          "usageNote": "In the context of a dcat:Relationship this is expected to point to another dcat:Dataset or other cataloged resource.",
          "cardinality": "0..*",
          "requirement": "optional",
          "source": {
            "type": "inherited",
            "from": "http://purl.org/dc/terms/relation"
          }
        }
      ]
    },
    {
      "id": "role",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Role",
      "label": "Role",
      "definition": "A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Role",
          "iri": "http://www.w3.org/ns/dcat#Role"
        },
        {
          "relation": "specializesClass",
          "label": "Concept",
          "iri": "http://www.w3.org/2004/02/skos/core#Concept"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "Used in qualified-attribution and qualified-relation to specify roles.",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/dcat#Role"
      },
      "properties": []
    },
    {
      "id": "agent",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Agent",
      "label": "Agent",
      "definition": "An agent (eg. person, group, software or physical artifact).",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Agent",
          "iri": "http://xmlns.com/foaf/0.1/Agent"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://xmlns.com/foaf/0.1/Agent"
      },
      "properties": []
    },
    {
      "id": "checksumAlgorithm",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#ChecksumAlgorithm",
      "label": "Checksum Algorithm",
      "definition": "Algorighm for Checksums.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "spdx:ChecksumAlgorithm",
          "iri": "http://spdx.org/rdf/terms#ChecksumAlgorithm"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://spdx.org/rdf/terms#ChecksumAlgorithm"
      },
      "properties": []
    },
    {
      "id": "class",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Class",
      "label": "Class",
      "definition": "The class of classes.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Class",
          "iri": "http://www.w3.org/2000/01/rdf-schema#Class"
        },
        {
          "relation": "specializesClass",
          "label": "Resource",
          "iri": "http://www.w3.org/2000/01/rdf-schema#Resource"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/2000/01/rdf-schema#Class"
      },
      "properties": []
    },
    {
      "id": "document",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Document",
      "label": "Document",
      "definition": "A document.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Document",
          "iri": "http://xmlns.com/foaf/0.1/Document"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://xmlns.com/foaf/0.1/Document"
      },
      "properties": []
    },
    {
      "id": "entity",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Entity",
      "label": "Entity",
      "definition": "",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Entity",
          "iri": "http://www.w3.org/ns/prov#Entity"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/prov#Entity"
      },
      "properties": []
    },
    {
      "id": "frequency",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Frequency",
      "label": "Frequency",
      "definition": "A rate at which something recurs.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Frequency",
          "iri": "http://purl.org/dc/terms/Frequency"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/Frequency"
      },
      "properties": []
    },
    {
      "id": "geometry",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Geometry",
      "label": "Geometry",
      "definition": "The locn:Geometry class provides the means to identify a location as a point, line, polygon, etc. expressed using coordinates in some coordinate reference system.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Geometry",
          "iri": "http://www.w3.org/ns/locn#Geometry"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/locn#Geometry"
      },
      "properties": []
    },
    {
      "id": "kind",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Kind",
      "label": "Kind",
      "definition": "The parent class for all objects",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Kind",
          "iri": "http://www.w3.org/2006/vcard/ns#Kind"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/2006/vcard/ns#Kind"
      },
      "properties": []
    },
    {
      "id": "licenseDocument",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#LicenseDocument",
      "label": "License Document",
      "definition": "A legal document giving official permission to do something with a resource.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "License Document",
          "iri": "http://purl.org/dc/terms/LicenseDocument"
        },
        {
          "relation": "specializesClass",
          "label": "Rights Statement",
          "iri": "http://purl.org/dc/terms/RightsStatement"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/LicenseDocument"
      },
      "properties": []
    },
    {
      "id": "linguisticSystem",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#LinguisticSystem",
      "label": "Linguistic System",
      "definition": "A system of signs, symbols, sounds, gestures, or rules used in communication.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Linguistic System",
          "iri": "http://purl.org/dc/terms/LinguisticSystem"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/LinguisticSystem"
      },
      "properties": []
    },
    {
      "id": "mediaType",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#MediaType",
      "label": "Media Type",
      "definition": "A file format or physical medium.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Media Type",
          "iri": "http://purl.org/dc/terms/MediaType"
        },
        {
          "relation": "specializesClass",
          "label": "Media Type or Extent",
          "iri": "http://purl.org/dc/terms/MediaTypeOrExtent"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/MediaType"
      },
      "properties": []
    },
    {
      "id": "mediaTypeOrExtent",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#MediaTypeOrExtent",
      "label": "Media Type or Extent",
      "definition": "A media type or extent.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Media Type or Extent",
          "iri": "http://purl.org/dc/terms/MediaTypeOrExtent"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/MediaTypeOrExtent"
      },
      "properties": []
    },
    {
      "id": "policy",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Policy",
      "label": "Policy",
      "definition": "A non-empty group of Permissions and/or Prohibitions.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Policy",
          "iri": "http://www.w3.org/ns/odrl/2/Policy"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/ns/odrl/2/Policy"
      },
      "properties": []
    },
    {
      "id": "rdfsResource",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#rdfs-Resource",
      "label": "Resource",
      "definition": "The class resource, everything.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Resource",
          "iri": "http://www.w3.org/2000/01/rdf-schema#Resource"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/2000/01/rdf-schema#Resource"
      },
      "properties": []
    },
    {
      "id": "rightsStatement",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#RightsStatement",
      "label": "Rights Statement",
      "definition": "A statement about the intellectual property rights (IPR) held in or over a resource, a legal document giving official permission to do something with a resource, or a statement about access rights.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Rights Statement",
          "iri": "http://purl.org/dc/terms/RightsStatement"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/RightsStatement"
      },
      "properties": []
    },
    {
      "id": "standard",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Standard",
      "label": "Standard",
      "definition": "A reference point against which other things can be evaluated or compared.",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Standard",
          "iri": "http://purl.org/dc/terms/Standard"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://purl.org/dc/terms/Standard"
      },
      "properties": []
    },
    {
      "id": "instant",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap#Instant",
      "label": "Time instant",
      "definition": "A temporal entity with zero extent or duration",
      "hierarchy": [
        {
          "relation": "profilesClass",
          "label": "Time instant",
          "iri": "http://www.w3.org/2006/time#Instant"
        },
        {
          "relation": "specializesClass",
          "label": "Temporal entity",
          "iri": "http://www.w3.org/2006/time#TemporalEntity"
        }
      ],
      "backwardAssociations": [],
      "usageNote": "",
      "source": {
        "type": "inherited",
        "from": "http://www.w3.org/2006/time#Instant"
      },
      "properties": []
    }
  ],
  "statistics": {
    "classCount": 33,
    "propertyCount": 80,
    "mainClassProfilesCount": 8,
    "supportiveClassProfilesCount": 25
  }
};