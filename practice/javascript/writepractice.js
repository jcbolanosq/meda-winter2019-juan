// using filesystem package to create files
var fs = require("fs");


var cars = {
    key: 10,
    working: true,
    color: "red",
    make: "honda"
};

console.log(cars);

// Converts a given JS Object to JSON String
var jsonText = JSON.stringify(cars);
// console looing JSON representation of the same Object
console.log(jsonText);

// Create a file, writes the text in jsonText to file.
fs.writeFileSync("writepractice.json", jsonText, "utf8");
console.log("File created Succesfully !");

