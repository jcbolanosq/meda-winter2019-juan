const fs = require("fs");


// How many eviction notices by outside sources of san frncisco?
// Which zip code had the most evictions. (Use Neighhood - Analysis boundery) ?
// How many evictions happened because of ELLIS Act?

class EvictionNotice {
    constructor (month, zip, ellisAct, condoConversion) {
        this.month = month ;
        this.zip = zip;
        this.ellisAct = ellisAct;
        this.condoConversion = condoConversion;
    }
}


let data = fs.readFileSync("2018jsonfile.json", "utf8");

data = JSON.parse(data);

dataObjects =[];

for (let i=0;i<data.data.length;i++) {
    dataObjects.push(stringToObject(data[i]));
    
}

// console.log(stringToObject(data.data[99]));
//questions 1
console.log("what month had the most evictions?");

// index 0 is january, index 11 is December.
let months = [0,0,0,0,0,0,0,0,0,0,0,0];

for (let i=0;i<dataObjects.length;i++) {
    months[parseInt(dataObjects[i].month)-1]++;

}

console.log(months);


// console.log( stringToObject(data.data[1000]) );

function stringToObject(string) {

    let entryArray = string.split(",");

    console.log(entryArray);

    // Split up the date into multiples parts

    let entryDate = entryArray[5].split("/");

    // Create a new object and provide the proper values.
    let evictionObject = new EvictionNotice(entryDate[0] , entryArray[4], entryArray[17], entryArray[18]);

    // return new object to call location
    return evictionObject;
}