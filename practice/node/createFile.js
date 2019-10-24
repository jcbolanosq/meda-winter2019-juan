
var fs = require("fs");

// Write files, will overwrite existing filenames.
fs.writeFileSync("repeat.txt", "This text here.", "utf8");

fs.writeFileSync("this is another file.jpg", "Some other text", "utf8")

// Read files, must load as utf8 to make sense.
// var textThatWasReadFromFile = fs.readFileSync("repeat.txt", "utf8");

// Update files, adds to the end of the file.

var i;
for (i=0; i<5; i++) {
    fs.appendFileSync("repeat.txt", "This text here.", "utf8");
}

var textThatWasReadFromFile = fs.readFileSync("repeat.txt", "utf8");

console.log(textThatWasReadFromFile);





