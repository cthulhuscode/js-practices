const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Insert number 1: "));
const num2 = parseInt(prompt("Insert number 2: "));

const calc = (num1, num2) => {
  return [num1 + num2, num1 / num2, num1 - num2];
};

const results = calc(num1, num2);

console.log(`\nSum: ${results[0]}\nDiv: ${results[1]}\nSub: ${results[2]}`);
