// Renaming ARGV array for easier reading.
// When using ARGV, start with index 2, because 0 and 1 are not useful in or code.
var terminalArguments = process.argv;

// Tests if index 2 has something and can be converted to number, otherwise send error message.
if (  isNaN( parseInt(terminalArguments[2]) )  ) {
    console.log("You are missing the first number, please type in two numbers after the command with spaces. Example: node calculator.js 50 100");

    return;
}

// Tests if index 3 has something and can be converted to number, otherwise send error message.
if (  isNaN( parseInt(terminalArguments[4]) )  ) {
    console.log("You are missing the second number, please type in two numbers after the command with spaces. Example: node calculator.js 50 100");

    return;
}

// Warns user that we can only use the first two numbers.
//if (terminalArguments[4] != undefined) {
//   console.log("Unfortunately this program can only use the first two numbers. Subcribe for future updates.")
//}

var number1 = parseInt(terminalArguments[2]);
var number2 = parseInt(terminalArguments[4]);

// Safe to use number1, and number2 as they are Number Datatypes.

//add(number1, number2);
// Decide what we want to do with these numbers
if (terminalArguments[4] == undefined) {
    console.log("You need to type the operation after the two number");
    return;
} else if (terminalArguments[3] == "+") {
    console.log(add(number1,number2));
} else if (terminalArguments[3] == "-") {
    console.log(sub(number1,number2));
} else if (terminalArguments[3] == "x") {
    console.log(mul(number1,number2));
} else if (terminalArguments[3] == "/") {
    console.log(div(number1,number2)); 
} else {
console.log("Sorry. We don't undertand your selection");
}


function add(num1, num2) {
    var total = num1 + num2;
    return total;
}
function sub(num1, num2) {
    var total = num1 - num2;
    return total;
}
function mul(num1, num2) {
    var total = num1 * num2;
    return total;
}
function div(num1, num2) {
    var total = num1 / num2;
    return total;
}


// Create divide, multiply, subtract, and leftover functions.