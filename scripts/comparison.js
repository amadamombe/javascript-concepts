// simple comparison
var firstNumber = 4;
var secondNumber = -4;

if (firstNumber == secondNumber) {
    console.log(true);
}
else
    console.log(false);




// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
if (sum % 2 == 1) {
    console.log(`The number ${sum} is an odd number`);
}
else {
    console.log(`The number ${sum} is an even number`);
}


// if statement
function putOnCoat(temp) {
    if (temp < 15 && temp > 0) {
        console.log("Too cold");
    } else if (temp <= 0) {
        console.log("Stay indoors, Frrrzzing outside");
    } else {
        console.log("Get your tan on");
    }
}
putOnCoat(-4);