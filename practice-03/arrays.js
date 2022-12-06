/* 1. Remove the last item */
let vegetables = ["Tomato", "Carrot", "Broccoli"];
vegetables.pop();
console.log(vegetables);

/* 2. Add “Broccoli” to the vegetables array */
vegetables = ["Tomato", "Carrot", "Garlic"];
vegetables.push("Broccoli");
console.log("\n", vegetables);

/* 3. Apply the splice() method 
  for removing “Carrot” and “Tomato” 
  from the vegetables array. */
vegetables = ["Garlic", "Carrot", "Tomato", "Broccoli"];
vegetables.splice(1, 2);
console.log("\n", vegetables);

/* 4. Sort the vegetables array alphabetically */
vegetables = ["Garlic", "Carrot", "Broccoli", "Pumpkin"];
vegetables.sort();
console.log("\n", vegetables);
