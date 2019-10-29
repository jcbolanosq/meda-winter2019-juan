var fs = require("fs");

try {
    var readFile = fs.readFileSync("ex.txt", "utf8");
} catch(error) {
    console.log("The error is ........... " + error.message);
    console.log("I will create the error for you");

    fs.writeFileSync("ex.txt","the file was created", "utf8");

}

fs.appendFileSync("ex.txt","This is a string")

