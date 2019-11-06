// Units is American, Miles and Gallons
const fs = require("fs");
const _ = require("lodash");
const Car = require("./car.js");
const Helicopter = require("./helicopter");

// let honda = new Car("Jesse", "Honda", "Civic", 2000, "white", "8EFD39E9", 125000, 35, 12, "gas", 150);

// console.log(honda);
// honda.travel(100);
// honda.refuel(10);

// console.log( _.random(10,100));

function createCar(make) {
 let randomCar = new Car(
    "user",
    make,
    "Company",
     _.random(1930, 2020),
     "transparent",
     _.random(1111111, 9999999),
      _.random(0, 300000),
      _.random(0,40),
      _.random(1,40),
      "gas",
      _.random(28,240)
    );

    return randomCar;
}

let container = {
    cars: []
}

for (let i=0; i<100; i++) {
    container.cars.push(createCar("Car " + i));
}


// console.log(randomCar);
let stringifiedCar = JSON.stringify(container);

fs.writeFileSync("carInventory.json", stringifiedCar,"utf8");

console.log(container.cars[7].make);




