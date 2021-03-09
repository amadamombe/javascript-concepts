// Task 
var firstNumber = 74.23;
var secondNumber = 11.20;

var sum = firstNumber + secondNumber;
var diff = firstNumber - secondNumber;
var mult = firstNumber * secondNumber;
var mod = 4 % 3;

console.log(sum);
console.log(diff);
console.log(mod);
console.log(mult.toFixed(2)); // round to 2 decimal places


// Tip Task  
var preTipTotal = 85.50;
var tipPercentage = 0.1;

var tip = preTipTotal * tipPercentage;
var totalBill = preTipTotal + tip;

console.log(tip);
console.log(`Your total bill with tip is ${totalBill}`);