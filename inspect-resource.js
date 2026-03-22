/* 
This script prints selected downloaded resources so they can be inspected
directly before any parsing or normalization step.
Input:  files listed in the `files` array
Output: file contents printed to the console
*/

import fs from "node:fs/promises";


const files = [
    "./resources/model.owl.ttl",
    "./resources/dsv.ttl",
    "./resources/shacl.ttl",
    "./resources/conceptual-model.plantuml",
];

for (const file of files) {
    try {
        const content = await fs.readFile(file, "utf-8");
        console.log(`\n========================== Content of ${file} ==========================\n`);
        console.log(content);
    } catch (error) {
        console.error(`Error reading ${file}:`, error);
    }
}
