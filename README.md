# Dataspecer Resource Exploration

This repository contains small JavaScript scripts created while exploring how to read Dataspecer generated resources programmatically.

The goal is to move from published specification artifacts such as `model.owl.ttl` and `dsv.ttl` to simple intermediate JSON structures that can later support better specification views, filtering, browsing, interactive visualization, or a TypeScript-like representation.


## Repository Flow

The scripts follow this workflow:

- fetch a generated resource from a published Dataspecer preview
- inspect the raw files directly
- parse Turtle resources into RDF quads
- build normalized JSON outputs from the model and application profile

## Scripts

### `fetch-resources.js`

Fetches a selected Dataspecer preview resource by specification IRI and prints its content.

- Input: preview base URL and specification IRI defined in the script
- Output: downloaded resource content in the terminal

### `inspect-resource.js`

Prints selected local resource files so they can be manually inspected.

- Input: files listed in the `files` array
- Output: raw file contents in the terminal

### `parse-turtle-demo.js`

Shows the basic Turtle parsing step using the `n3` parser.

- Input: `./resources/model.owl.ttl`
- Output: parsed RDF quads printed to the terminal

### `build-model-spec.js`

Builds a simple JSON representation of classes and properties found in `model.owl.ttl`.

- Input: `./resources/model.owl.ttl`
- Output: `./output/spec-model.json`

### `build-application-profile.js`

Builds a normalized JSON representation of class and property profiles found in `dsv.ttl`.

- Input: `./resources/dsv.ttl`
- Output: `./output/spec-ap.json`

## Run

```bash
npm run inspect
npm run parse:turtle
npm run build:model
npm run build:ap
```

## Notes For Review

This repository is small and exploratory. The scripts are focused on understanding the structure of Dataspecer outputs and verifying that the published resources can be transformed into data structures useful for future UI improvements.
