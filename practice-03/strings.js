const prompt = require("prompt-sync")();

/* 1. is string? */
const input1 = prompt("Insert string: ");
const isString = (str) => typeof str === "string";
console.log(`\nIs string? ${isString(input1)}`);

/* 2. Return the word 'apples' */
let txt = "I eat apples the whole day";
console.log("\n" + txt.slice(6, 12));

/* 3. Replace 'Hello' with 'Hi' */
txt = "Hello World";
console.log("\n" + txt.replace("Hello", "Hi"));

/* 4. Convert txt to uppercase */
console.log("\n" + txt.toUpperCase());

/* 5. Convert to lowercase */
console.log("\n" + txt.toLowerCase());
