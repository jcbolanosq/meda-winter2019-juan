// include packeges we will be using
const fs = require("fs");
const _ = require("lodash");

// read the dataset file into our script and store dataset variable
const dataset = fs.readFileSync("Eviction_Notices.csv","utf8");

const dataArray =  dataset.split("\n");

// Removing the last index because it is empty
dataArray.pop();

// removin firts line, but keeping in the future
let headings = dataArray.shift();

// console.log(dataArray[22]);
//const singleEntry = dataArray[22];

//const singleEntryArray = singleEntry.split(",");
//console.log(singleEntryArray[5]); //position of date

//const entryDate = singleEntryArray[5],split("/");

//console.log(entryDate);

//console.log(entryDate[2]);

//if ("2018" == entryDate[2]) {
//    console.log("This is an entry for 2018");
//}

console.log(dataArray.length);

let total = 0;

let json2018Data = {
    headings: headings,
    data: []
};

for (let i=0;i<dataArray.length; i++) {

    let pass = is2018(dataArray[i]);

    if (pass === true) {
        console.log("the line entry "+ i + "is from the year 2018 : ");
        total++;
        json2018Data.data.push(dataArray[i]);
    }else if (pass === 1) {
        console.log("The line "+ (i+1) + "has issue! please check. ");
        console.log(dataArray[i]);
    }

}

console.log(total);


function is2018(entry) {

    // Create an array thr splits up the individual columns of the entry
    const singleEntryArray = entry.split(",");


    // grab the date index
    const entryDate = singleEntryArray[5].split("/"); 
    
    // Using the array whith the individual date parts
    if ("2018" == entryDate[2]) {
        //console.log("This is an entry for 2018");
        return true;
    } else if (undefined === entryDate[2]) {
        console.log("we found the issue with the line:\n"+ entry);
    } else {
        return false;
    }
}

// finally console log the total amount entries that matched 2018.
console.log(json2018Data);

// converto object to json string

let jsonString = JSON.stringify(json2018Data);

fs.writeFileSync("2018jsonfile.json", jsonString, "utf8");

console.log("File was written");

