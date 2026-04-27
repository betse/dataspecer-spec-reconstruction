window.specificationsData = {
  "defaultSpecificationId": "dcat-ap",
  "specifications": [
    {
      "id": "dcat-ap",
      "name": "DCAT-AP 3.0.1",
      "type": "Application Profile",
      "status": "Stable",
      "release": "2024-11-15",
      "sourceUrl": "https://mff-uk.github.io/specifications/dcat-ap/",
      "iri": "https://semiceu.github.io/DCAT-AP/releases/3.0.1/",
      "description": "An application profile of the DCAT vocabulary for data portals in Europe.",
      "author": "SEMIC Education & Learning",
      "license": "CC BY 4.0",
      "counts": {
        "classes": 24,
        "properties": 96,
        "shapes": 35
      },
      "metrics": [
        {
          "label": "Class Profiles",
          "value": 24
        },
        {
          "label": "Property Profiles",
          "value": 96
        },
        {
          "label": "Shapes",
          "value": 35
        }
      ],
      "tree": [
        {
          "label": "Overview"
        },
        {
          "label": "Classes",
          "count": 24
        },
        {
          "label": "Properties",
          "count": 96
        },
        {
          "label": "Profiles"
        },
        {
          "label": "Shapes"
        },
        {
          "label": "Attachments"
        }
      ],
      "attachments": [
        {
          "name": "dsv.ttl",
          "type": "Application profile RDF",
          "size": "173 KB"
        },
        {
          "name": "model.owl.ttl",
          "type": "Vocabulary RDF",
          "size": "18.7 KB"
        },
        {
          "name": "shacl.ttl",
          "type": "Validation shapes",
          "size": "24.2 KB"
        },
        {
          "name": "schema.json",
          "type": "JSON Schema",
          "size": "15.6 KB"
        }
      ],
      "documentation": {
        "classProfiles": [
          {
            "id": "dataset",
            "name": "Dataset",
            "role": "main",
            "iri": "https://data.europa.eu/m8g/DCAT-AP#Dataset",
            "profileOf": "dcat:Dataset",
            "source": "DCAT-DAP:Dataset",
            "definition": "A collection of data, published or curated by a single agent, and available for access or download in one or more distributions.",
            "lineage": [
              "DCAT Vocabulary",
              "DCAT-DAP",
              "DCAT-AP 3.0.1"
            ],
            "properties": [
              {
                "id": "dataset-title",
                "name": "title",
                "iri": "http://purl.org/dc/terms/title",
                "profileOf": "dct:title",
                "cardinality": "1..n",
                "range": "rdf:langString",
                "requirement": "mandatory",
                "source": "CatalogedResource.title",
                "definition": "A name given to the Dataset."
              },
              {
                "id": "dataset-description",
                "name": "description",
                "iri": "http://purl.org/dc/terms/description",
                "profileOf": "dct:description",
                "cardinality": "1..n",
                "range": "rdf:langString",
                "requirement": "mandatory",
                "source": "CatalogedResource.description",
                "definition": "A free-text account of the Dataset."
              },
              {
                "id": "dataset-distribution",
                "name": "distribution",
                "iri": "http://www.w3.org/ns/dcat#distribution",
                "profileOf": "dcat:distribution",
                "cardinality": "0..n",
                "range": "Distribution",
                "requirement": "recommended",
                "source": "Dataset.distribution",
                "definition": "An available distribution of the Dataset."
              },
              {
                "id": "dataset-theme",
                "name": "theme",
                "iri": "http://www.w3.org/ns/dcat#theme",
                "profileOf": "dcat:theme",
                "cardinality": "0..n",
                "range": "skos:Concept",
                "requirement": "recommended",
                "source": "CatalogedResource.theme",
                "definition": "A category of the Dataset."
              },
              {
                "id": "dataset-keyword",
                "name": "keyword",
                "iri": "http://www.w3.org/ns/dcat#keyword",
                "profileOf": "dcat:keyword",
                "cardinality": "0..n",
                "range": "rdf:langString",
                "requirement": "optional",
                "source": "CatalogedResource.keyword",
                "definition": "A keyword or tag describing the Dataset."
              },
              {
                "id": "dataset-publisher",
                "name": "publisher",
                "iri": "http://purl.org/dc/terms/publisher",
                "profileOf": "dct:publisher",
                "cardinality": "0..1",
                "range": "Agent",
                "requirement": "recommended",
                "source": "CatalogedResource.publisher",
                "definition": "An entity responsible for making the Dataset available."
              }
            ]
          },
          {
            "id": "catalogue",
            "name": "Catalogue",
            "role": "main",
            "iri": "https://data.europa.eu/m8g/DCAT-AP#Catalogue",
            "profileOf": "dcat:Catalog",
            "source": "DCAT-DAP:Catalog",
            "definition": "A catalogue or repository that hosts the Datasets or Data Services being described.",
            "lineage": [
              "DCAT Vocabulary",
              "DCAT-DAP",
              "DCAT-AP 3.0.1"
            ],
            "properties": [
              {
                "id": "catalogue-title",
                "name": "title",
                "iri": "http://purl.org/dc/terms/title",
                "profileOf": "dct:title",
                "cardinality": "1..n",
                "range": "rdf:langString",
                "requirement": "mandatory",
                "source": "CatalogedResource.title",
                "definition": "A name given to the Catalogue."
              },
              {
                "id": "catalogue-description",
                "name": "description",
                "iri": "http://purl.org/dc/terms/description",
                "profileOf": "dct:description",
                "cardinality": "1..n",
                "range": "rdf:langString",
                "requirement": "mandatory",
                "source": "CatalogedResource.description",
                "definition": "A free-text account of the Catalogue."
              },
              {
                "id": "catalogue-dataset",
                "name": "dataset",
                "iri": "http://www.w3.org/ns/dcat#dataset",
                "profileOf": "dcat:dataset",
                "cardinality": "0..n",
                "range": "Dataset",
                "requirement": "recommended",
                "source": "Catalogue.dataset",
                "definition": "A Dataset that is part of the Catalogue."
              }
            ]
          },
          {
            "id": "distribution",
            "name": "Distribution",
            "role": "main",
            "iri": "https://data.europa.eu/m8g/DCAT-AP#Distribution",
            "profileOf": "dcat:Distribution",
            "source": "DCAT-DAP:Distribution",
            "definition": "A physical embodiment of a Dataset in a particular format.",
            "lineage": [
              "DCAT Vocabulary",
              "DCAT-DAP",
              "DCAT-AP 3.0.1"
            ],
            "properties": [
              {
                "id": "distribution-access-url",
                "name": "access URL",
                "iri": "http://www.w3.org/ns/dcat#accessURL",
                "profileOf": "dcat:accessURL",
                "cardinality": "1..n",
                "range": "rdfs:Resource",
                "requirement": "mandatory",
                "source": "Distribution.accessURL",
                "definition": "A URL that gives access to a Distribution of the Dataset."
              },
              {
                "id": "distribution-format",
                "name": "format",
                "iri": "http://purl.org/dc/terms/format",
                "profileOf": "dct:format",
                "cardinality": "0..1",
                "range": "MediaTypeOrExtent",
                "requirement": "recommended",
                "source": "Distribution.format",
                "definition": "The file format of the Distribution."
              }
            ]
          }
        ]
      }
    },
    {
      "id": "dcat-dap",
      "name": "DCAT-DAP",
      "type": "Application Profile",
      "status": "Stable",
      "release": "2024-03-08",
      "sourceUrl": "https://mff-uk.github.io/specifications/dcat-dap/",
      "iri": "https://mff-uk.github.io/specifications/dcat-dap/",
      "description": "A reusable base application profile for DCAT-aligned dataset catalog specifications.",
      "author": "MFF UK",
      "license": "CC BY 4.0",
      "counts": {
        "classes": 18,
        "properties": 74,
        "shapes": 0
      },
      "metrics": [
        {
          "label": "Class Profiles",
          "value": 18
        },
        {
          "label": "Property Profiles",
          "value": 74
        },
        {
          "label": "Shapes",
          "value": 0
        }
      ],
      "tree": [
        {
          "label": "Overview"
        },
        {
          "label": "Classes",
          "count": 18
        },
        {
          "label": "Properties",
          "count": 74
        },
        {
          "label": "Profiles"
        },
        {
          "label": "Attachments"
        }
      ],
      "attachments": [
        {
          "name": "dsv.ttl",
          "type": "Application profile RDF",
          "size": "113 KB"
        },
        {
          "name": "model.owl.ttl",
          "type": "Vocabulary RDF",
          "size": "21.1 KB"
        },
        {
          "name": "schema.json",
          "type": "JSON Schema",
          "size": "12.4 KB"
        }
      ],
      "documentation": {
        "classProfiles": [
          {
            "id": "dataset",
            "name": "Dataset",
            "role": "main",
            "iri": "https://mff-uk.github.io/specifications/dcat-dap#Dataset",
            "profileOf": "dcat:Dataset",
            "source": "DCAT Vocabulary",
            "definition": "A conceptual dataset resource profiled from the DCAT vocabulary.",
            "lineage": [
              "DCAT Vocabulary",
              "DCAT-DAP"
            ],
            "properties": [
              {
                "id": "dap-dataset-title",
                "name": "title",
                "iri": "http://purl.org/dc/terms/title",
                "profileOf": "dct:title",
                "cardinality": "0..n",
                "range": "rdfs:Literal",
                "requirement": "optional",
                "source": "CatalogedResource.title",
                "definition": "A name given to the resource."
              },
              {
                "id": "dap-dataset-description",
                "name": "description",
                "iri": "http://purl.org/dc/terms/description",
                "profileOf": "dct:description",
                "cardinality": "0..n",
                "range": "rdfs:Literal",
                "requirement": "optional",
                "source": "CatalogedResource.description",
                "definition": "A free-text account of the resource."
              }
            ]
          },
          {
            "id": "cataloged-resource",
            "name": "Cataloged Resource",
            "role": "main",
            "iri": "https://mff-uk.github.io/specifications/dcat-dap#CatalogedResource",
            "profileOf": "dcat:Resource",
            "source": "DCAT Vocabulary",
            "definition": "A resource published or curated in a catalog.",
            "lineage": [
              "DCAT Vocabulary",
              "DCAT-DAP"
            ],
            "properties": [
              {
                "id": "dap-resource-keyword",
                "name": "keyword",
                "iri": "http://www.w3.org/ns/dcat#keyword",
                "profileOf": "dcat:keyword",
                "cardinality": "0..n",
                "range": "rdfs:Literal",
                "requirement": "optional",
                "source": "CatalogedResource.keyword",
                "definition": "A keyword or tag describing the resource."
              }
            ]
          }
        ]
      }
    },
    {
      "id": "dcat-vocab",
      "name": "DCAT Vocabulary",
      "type": "Vocabulary",
      "status": "Stable",
      "release": "2024-01-18",
      "sourceUrl": "https://www.w3.org/TR/vocab-dcat-3/",
      "iri": "http://www.w3.org/ns/dcat#",
      "description": "The base RDF vocabulary for describing datasets and data services in catalogs.",
      "author": "W3C",
      "license": "W3C Document License",
      "counts": {
        "classes": 32,
        "properties": 112,
        "shapes": 0
      },
      "metrics": [
        {
          "label": "Classes",
          "value": 32
        },
        {
          "label": "Properties",
          "value": 112
        },
        {
          "label": "External Docs",
          "value": 1
        }
      ],
      "tree": [
        {
          "label": "Vocabulary"
        },
        {
          "label": "Classes",
          "count": 32
        },
        {
          "label": "Properties",
          "count": 112
        }
      ],
      "attachments": [
        {
          "name": "dcat.ttl",
          "type": "Vocabulary RDF",
          "size": "84 KB"
        },
        {
          "name": "index.html",
          "type": "HTML documentation",
          "size": "310 KB"
        }
      ]
    },
    {
      "id": "shacl-shapes",
      "name": "SHACL Shapes",
      "type": "Validation Shapes",
      "status": "Stable",
      "release": "2024-11-15",
      "sourceUrl": "https://mff-uk.github.io/specifications/dcat-ap/shacl.ttl",
      "iri": "https://mff-uk.github.io/specifications/dcat-ap/shacl",
      "description": "Generated validation constraints for checking DCAT-AP data instances.",
      "author": "Dataspecer generator",
      "license": "CC BY 4.0",
      "counts": {
        "classes": 0,
        "properties": 0,
        "shapes": 35
      },
      "metrics": [
        {
          "label": "Node Shapes",
          "value": 35
        },
        {
          "label": "Property Shapes",
          "value": 112
        },
        {
          "label": "Rules",
          "value": 35
        }
      ],
      "tree": [
        {
          "label": "Shapes",
          "count": 35
        },
        {
          "label": "Constraints",
          "count": 112
        },
        {
          "label": "Attachments"
        }
      ],
      "attachments": [
        {
          "name": "shacl.ttl",
          "type": "Validation shapes",
          "size": "24.2 KB"
        }
      ]
    },
    {
      "id": "prov-o",
      "name": "PROV-O",
      "type": "Ontology",
      "status": "Stable",
      "release": "2013-04-30",
      "sourceUrl": "https://www.w3.org/TR/prov-o/",
      "iri": "http://www.w3.org/ns/prov#",
      "description": "A provenance ontology reused for attribution and derivation relationships.",
      "author": "W3C",
      "license": "W3C Document License",
      "counts": {
        "classes": 13,
        "properties": 55,
        "shapes": 0
      },
      "metrics": [
        {
          "label": "Classes",
          "value": 13
        },
        {
          "label": "Properties",
          "value": 55
        },
        {
          "label": "Imported Terms",
          "value": 8
        }
      ],
      "tree": [
        {
          "label": "Ontology"
        },
        {
          "label": "Classes",
          "count": 13
        },
        {
          "label": "Properties",
          "count": 55
        }
      ],
      "attachments": [
        {
          "name": "prov-o.ttl",
          "type": "Ontology RDF",
          "size": "146 KB"
        }
      ]
    }
  ],
  "relationships": [
    {
      "id": "rel-profileof-vocab",
      "source": "dcat-ap",
      "target": "dcat-vocab",
      "label": "profileOf",
      "type": "profileOf"
    },
    {
      "id": "rel-specializes-dap",
      "source": "dcat-ap",
      "target": "dcat-dap",
      "label": "specializes",
      "type": "specializes"
    },
    {
      "id": "rel-reuses-shacl",
      "source": "dcat-ap",
      "target": "shacl-shapes",
      "label": "reuses",
      "type": "reuses"
    },
    {
      "id": "rel-uses-prov",
      "source": "dcat-ap",
      "target": "prov-o",
      "label": "uses",
      "type": "uses"
    }
  ],
  "relatedSpecifications": [
    {
      "id": "dcat-dap",
      "name": "DCAT-DAP 2.1",
      "status": "Stable"
    },
    {
      "id": "dcat-vocab",
      "name": "DCAT Vocabulary",
      "status": "Stable"
    },
    {
      "id": "shacl-shapes",
      "name": "SHACL Shapes",
      "status": "Stable"
    },
    {
      "id": "prov-o",
      "name": "PROV-O",
      "status": "Stable"
    },
    {
      "id": "skos",
      "name": "SKOS",
      "status": "External"
    }
  ]
};
