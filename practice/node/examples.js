var fs = require("fs");

var doubleQuotes = "this is a string";
var singleQuotes = 'this is a string';
var stringLiterals = `this 
is
a 
string`;

var html = 
"<html>" +
"<head>" +
"<style></style>" +
"</head>" +
"<body></body>" +
"</html>";

var html2 = "<html><head><style></style></head><body></body></html>";

var html3 = `
<html>
    <head>
        <style></style>
    </head>

    <body>
    </body>
</html>
`;

// Update this script to write the text of html3 to a file called sample.html.

fs.writeFileSync("sample.html", html3, "utf8");


var sum = 100 * 7;

var sum2 = 100 * 8;



