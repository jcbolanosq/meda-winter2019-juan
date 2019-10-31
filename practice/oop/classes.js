// Sample Person Object
let firstPerson = {
    firstName: "Eduardo",
    lastName: "Garcia",
    age: 29, // Javascript Date and Time Objects
    city: "San Francisco",
    state: "California",
    occupation: "cobtractor",
    eye: "transparent",
    hair: "black",
    gender: "male",
    food: "sushi"
};

let secondPerson = {
    firstName: "Barbara",
    lastName: "Garcia",
    age: 50, // Javascript Date and Time Objects
    city: "San Francisco",
    state: "California"
};

// console.log("Welcome! "+ firstPerson.firstName + ", how was your day today?");

// A function tha calculate average ages from arrays

let people = [firstPerson,secondPerson];

function getAverageAge(personArray) {

    let totalAge = 0 ;

    for (let i=0; i<personArray.length;i++) {
        totalAge=totalAge+personArray[i].age;
    }

    return totalAge / personArray.length;
}

// console.log("The average age of the people is: "+getAverageAge(people));


// Same object but using Classes instead.

class Employee {
    constructor(firstNameValue,secondValue,tercerValue,timeSheet,salary) {
        console.log("A new employee was created!");
        this.firstName = firstNameValue;
        this.age = secondValue;
        this.city = tercerValue;
        this.timeSheet = timeSheet;
        this.originalTime = timeSheet;
        this.salary = salary;
    }

    work() {
        console.log(this.firstName + " is working really hard");
        this.timeSheet = this.timeSheet -1;
        console.log(this);
    }

    // GETTER AND SETTER
    getSalary() {
        return this.salary;
    }
    setSalary(newSalary) {
        if (salary > 100000) {
            console.log("This salary need aditional Aproval");
            return 1;

        }else {
            this.salary = newSalary;
            return 0;
        }
    }
    // END GETTER AND SETTER

    goHomeAndSleep() {
        console.log(this.firstName + " went home to sleep");
        this.timeSheet = this.originalTime;
    }
}

let firstEmployee = new Employee("Eduardo Garcia",30,"San Francisco",8,12000);
let secondEmployee = new Employee("Pedro Infante",40,"San Francisco",4,9500);


console.log(firstEmployee);
console.log(secondEmployee);
console.log("The age is : "+firstEmployee.age);

firstEmployee.work();
firstEmployee.goHomeAndSleep();

secondEmployee.work();

// var xsalary = getSalary();

