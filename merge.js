const fs = require('fs');
const path = require('path');

// Load the JSON data from files
const jsonFilePath = path.join(__dirname, 'database.json');
const priceFilePath = path.join(__dirname, 'sila.json');
const outputFilePath = path.join(__dirname, 'public/database.json');

let jsonData, jsonPrice;

// Read and parse the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, jsonDataString) => {
    if (err) {
        console.error("Error reading JSON file:", err);
        return;
    }

    jsonData = JSON.parse(jsonDataString);

    // Now read the price file
    fs.readFile(priceFilePath, 'utf8', (err, priceDataString) => {
        if (err) {
            console.error("Error reading price JSON file:", err);
            return;
        }

        jsonPrice = JSON.parse(priceDataString);

        const filteredData = [];

        // Map pricing to jsonData based on the edition
        jsonPrice.forEach(row => {
            const item = jsonData.find(item => item.publicationNumber === row.edition);
            if (item) {
                item.pricing = row.pricing; // Make sure pricing is correctly assigned
                filteredData.push(item);
            } else {
                console.warn(`No matching item found for edition: ${row.edition}`);
            }
        });

        // Write the new JSON data to a file
        fs.writeFile(outputFilePath, JSON.stringify(filteredData, null, 4), (err) => {
            if (err) {
                console.error("Error writing to output file:", err);
            } else {
                console.log("Filtered JSON data has been created successfully.");
            }
        });
    });
});
