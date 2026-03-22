/*
This script is a minimal Turtle parsing demo.
Input:  ./resources/model.owl.ttl
Output: parsed quads printed to the console
*/

import fs from "node:fs/promises";
import { Parser } from "n3";


const modelFile = "./resources/model.owl.ttl";
const ttl = await fs.readFile(modelFile, "utf-8");

const parser = new Parser();
const quads = parser.parse(ttl);

console.log(`Parsed ${quads.length} quads from ${modelFile}.`);
console.log("Listing all parsed quads:\n");

for (const quad of quads) {
    console.log(`Subject: ${quad.subject.value}`);
    console.log(`Predicate: ${quad.predicate.value}`);
    console.log(`Object: ${quad.object.value}\n`);
}
