var fs = require("fs");

//Math.random();

//JSON.parse();

var exampleObject = {
    mainkey: 105,
    isThisTrue: true,
    someText: "some Text!",
    arrays: [100, "string", false],
    childObject: {nestedkey: "inside"},
    aCoolFunction: function() {
        console.log("I am a method tha belongs to exampleObject");
    }
};

console.log(exampleObject.mainkey);
console.log(exampleObject["mainkey"]);
exampleObject.mainkey = 106 ;

exampleObject.aCoolFunction();

// console logging a normal object
console.log(exampleObject);

var jsonText = JSON.stringify(exampleObject);
// console looing JSON representation of the same Object
console.log(jsonText);

fs.writeFileSync("exampleJSON.json", jsonText, "utf8");
console.log("File created Succesfully !");

