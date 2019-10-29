var fs = require("fs");

// variable for future object
var convertedObject;

// read file saved.json to work on content
var JSONText = fs.readFileSync("writepractice.json","utf8");

// Converting JSON to a Javascript Object
convertedObject = JSON.parse(JSONText);

// Update the color property
convertedObject.color = "brows";

console.log(convertedObject);

// converting  to JSON object. Must be JSON format
var stringToJson = JSON.stringify(convertedObject);

// This section adds a historical record of the dta to a file called "history.txt"
fs.appendFileSync("history.txt",stringToJson + "ns","utf8");


// save the JSON File to the same file. Replacing old content.
fs.writeFileSync("writepractice.json",stringToJson,"utf8");

console.log("Updated completed !");
