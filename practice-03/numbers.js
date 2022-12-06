let num = 90;

/* 1. Num to string */
const numToString = (num) => num.toString();
num = numToString(num);
console.log(`\nNum to string: ${num}`);

/* 2. String to num */
const strToNumber = (str) => parseInt(str);
num = strToNumber(num);
console.log(`\nString to Number: ${num}`);

/* 3. Extend length of num 15 */
console.log("\n" + num.toPrecision(15));

/* 4. Extend amount of decimal to 4*/
console.log("\n" + num.toFixed(4));
