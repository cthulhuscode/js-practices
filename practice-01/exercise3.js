const prompt = require("prompt-sync")();

const num = prompt("Insert a number: ");

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

isPrime(num)
  ? console.log(`${num} is prime`)
  : console.log(`${num} isn't prime`);
