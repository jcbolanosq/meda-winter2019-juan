const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");

data = JSON.parse(data);

console.log(data.cars[49].MPG);

// What is the average miles per gllon of these 100 cars
// let carsArray = data.cars
// carsArray.length or data.cars.lenght

let total = 0;
for (let i=0; i<data.cars.length; i++) {
    total = total + data.cars[i].MPG

}

let mpgAverage = total / data.cars.length;

console.log("What is the average miles per gallon of these 100 cars?");
console.log(mpgAverage + "MPG");