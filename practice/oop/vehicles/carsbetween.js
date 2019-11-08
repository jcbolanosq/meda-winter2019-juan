const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");

data = JSON.parse(data);

//console.log(data.cars[49].year);

// What is the average miles per gllon of these 100 cars
// let carsArray = data.cars
// carsArray.length or data.cars.lenght
// console.log(cars[cars.length -1]);

let cars = data.cars ;

let total = 0;
for (let i=0; i < cars.length; i++) {
    //total = total + data.cars[i].MPG
    let currentCar = cars[i];

    if ( currentCar.year >= 1940 && currentCar.year <= 1960 ) {
        
            total = total + 1 ;
    }

}

console.log(cars[cars.length - 1].year);
//let mpgAverage = total / data.cars.length;

//console.log("What is the average miles per gallon of these 100 cars?");
//console.log(mpgAverage + "MPG");

console.log("The total Cars Between 1940 and 1960 are ");
console.log("total : " + total);
