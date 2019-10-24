
var fs = require("fs");

var html3 = ` 
<html>
    <head>
        <stlyle></stlyle>
    </head>
    
    <body>
    </body>
</html> `;


// Write files, will overwrite existing filenames.
fs.writeFileSync("sample.html", html3, "utf8");


var textReadFromFile = fs.readFileSync("sample.html", "utf8");

console.log(textReadFromFile);





