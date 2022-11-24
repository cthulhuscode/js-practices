const prompt = require("prompt-sync")();

const maxNum = (num1, num2, num3) => {
  return [num1, num2, num3].reduce((a, b) => (a > b ? a : b));
};

const num1 = parseInt(prompt("Insert number 1: "));
const num2 = parseInt(prompt("Insert number 2: "));
const num3 = parseInt(prompt("Insert number 3: "));

console.log("The max number is: " + maxNum(num1, num2, num3));
