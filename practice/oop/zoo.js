class Animal {
    constructor(metabolism,expired) {
        this.metabolism=metabolism;
        this.expired=expired;
    }
}

// class for Fish types that inherits Animal properties and methods. Super call at Animal Method.
class Fish extends Animal {
    constructor(tasty) {
        super("medium-blooded","fried");
        this.tasty = tasty;
    }
}

var i=1;
class Mammal {
    constructor(type,limbs,mouth,nose,eyes,hair,weightLb) {
        this.type=type;
        this.limbs=limbs;
        this.mouth=mouth;
        this.nose=nose;
        this.eyes=eyes;
        this.hair=hair;
        this.weightLb=weightLb;
        this.age=0;
    }

    eat() {
        console.log(this.type + " eats food");
    }

    sleep() {
        console.log(this.type + "sleeps.");
    }

    live(years) {
        this.age = this.age + years;

        if (this.lifeExpectancy < this.age) {
            console.log(this.type + " is now dead.");
            this.expired = true;
        } else {
            console.log(this.type + " has successfully lived for an additional "+ years + " years.");
        }
    }

    reproduce(weightLb) {
        console.log(this.type + " create a baby");

        let baby = new Mammal(this.type+i,this.limbs,this.mouth,this.nose,this.eyes,this.hair,weightLb);

        i++;

        return baby;
    }
}

const firstMammal = new Mammal("Dog",4,1,1,2,1,6);

console.log(firstMammal);
firstMammal.sleep();
firstMammal.eat();

let secondMammal = firstMammal.reproduce(3);

let secondMamma2 = firstMammal.reproduce(8);

console.log(firstMammal);
console.log(secondMammal);
console.log(secondMamma2);

// Cat Mammal
let firstCatMammal = new Mammal("Cat",4,1,1,2,1,6);

let litter = new Array();

litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 3));
litter.push(firstCatMammal.reproduce(1, 4));

console.log(litter);

console.log(litter[1].type);
console.log(litter[2].type);


// New Fish Object
let tilapia = new Fish(true);

console.log(tilapia.metabolism);


