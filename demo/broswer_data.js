const BROWSER_DATA = {
  "specification": {
    "id": "dcat-ap",
    "title": "DCAT Application Profile",
    "editor": "Jakub Klímek"
  },

  "summary": {
    "classProfiles": 13,
    "propertyProfiles": 30
  },

  "startModes": [
    { "id": "beginner", "label": "Beginner", "active": true },
    { "id": "analyst", "label": "Analyst" },
    { "id": "developer", "label": "Developer" }
  ],

  "hierarchy": {
    "nodes": [
      {
        "id": "http://www.w3.org/ns/dcat",
        "label": "DCAT",
        "type": "vocabulary",
        "editor": "Riccardo Albertoni",
        "active": false,
        "external": true,
        "description": "DCAT is a W3C vocabulary designed to facilitate interoperability between data catalogs.",
        "summary": {
          "classProfiles": 10,
          "propertyProfiles": 20
        }
      },
      {
        "id": "https://mff-uk.github.io/specifications/dcat-dap/",
        "label": "DCAT-DAP",
        "type": "application_profile",
        "editor": "Jakub Klímek",
        "active": false,
        "description": "DCAT-DAP refines DCAT to define a structured application profile for catalog data.",
        "summary": {
          "classProfiles": 10,
          "propertyProfiles": 25
        }
      },
      {
        "id": "https://mff-uk.github.io/specifications/dcat-ap/",
        "label": "DCAT-AP",
        "type": "application_profile",
        "editor": "Riccardo Albertoni",
        "active": true,
        "description": "DCAT-AP extends DCAT-DAP and DCAT to describe datasets and catalogs for interoperability.",
        "summary": {
          "classProfiles": 13,
          "propertyProfiles": 30
        }
      }
    ],
    "edges": [
      {
        "from": "https://mff-uk.github.io/specifications/dcat-ap/",
        "to": "https://mff-uk.github.io/specifications/dcat-dap/"
      },
      {
        "from": "https://mff-uk.github.io/specifications/dcat-dap/",
        "to": "http://www.w3.org/ns/dcat"
      }
    ]
  },

  "externalReferences": [
    {
      "label": "DCAT",
      "url": "http://www.w3.org/ns/dcat"
    },
    {
      "label": "SKOS",
      "url": "http://www.w3.org/2004/02/skos/core#"
    },
    {
        "label": "foaf",
        "url": "http://xmlns.com/foaf/0.1/"
    }
  ]
};