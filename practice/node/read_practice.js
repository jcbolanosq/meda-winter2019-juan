// Import the Package FS.
var fs = require("fs");

// variable for future Object.
var convertedObject;

// Read file saved.json to work on content.
var JSONText = fs.readFileSync("saved.json", "utf8");

// Converting JSON to a JavaScript Object. Must be JSON format or will break.
convertedObject = JSON.parse(JSONText);

//Update the age property.
convertedObject.age = 45;

// Add the legs property.
convertedObject.legs = 11;


// Convert JavaScript Object to JSON text.
var stringifiedObject = JSON.stringify(convertedObject);


// START This section adds a historical record of the data to a file called "history.txt".

// Previous way of writing history, but unusable for JS programs.
// fs.appendFileSync("history.txt", stringifiedObject + "\n", "utf8");

// Read history file
var historyString = fs.readFileSync("history.json", "utf8");

var historyObject = JSON.parse(historyString);

var historyArray = historyObject.objectsArray;
var timestampArray = historyObject.timestamp;

historyArray.push(convertedObject);
timestampArray.push(new Date().toLocaleString());

historyObject.objectsArray = historyArray;
historyObject.timestamp = timestampArray;

var newUpdatedJSON = JSON.stringify(historyObject);

fs.writeFileSync("history.json", newUpdatedJSON, "utf8");




// END History Record Save


// Save the JSON to the same file, replacing old content.
fs.writeFileSync("saved.json", stringifiedObject, "utf8");