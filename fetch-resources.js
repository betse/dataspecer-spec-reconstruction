/*
This script fetches published Dataspecer resource by preview IRI.
Input:  preview base URL + specification IRI
Output: downloaded resource content printed to the console
*/ 

const baseUrl = "https://demo.dataspecer.com/api/preview";
const specificationIri = "f66eadc6-acc3-4be0-a37d-6e1be39d1f44";

const files = {
    "model.owl.ttl": `${baseUrl}/model.owl.ttl?iri=${specificationIri}`,
};

const [filename, url] = Object.entries(files)[0];

async function download() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Failed to download ${filename}: ${response.status} ${response.statusText}`);
            process.exit(1);
        }

        const content = await response.text();
        console.log(content);
    } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
        process.exit(1);
    }
}

download();
