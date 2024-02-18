const prompt = require('prompt-sync')();

function getSum() {
    var prompt1 = prompt("Enter the first number:");
    var num1 = parseFloat(prompt1);

    var prompt2 = prompt("Enter the second number:");
    var num2 = parseFloat(prompt2);

    return num1 + num2;
}

console.log('Sum = ', getSum());
