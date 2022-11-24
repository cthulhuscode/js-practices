const prompt = require("prompt-sync")();

const num = prompt("Inserta calificación: ");

let level = "";

if (num >= 0 && num < 3) level = "Muy deficiente";
else if (num >= 3 && num < 5) level = "Insuficiente";
else if (num >= 5 && num < 6) level = "Suficiente";
else if (num >= 6 && num < 7) level = "Bien";
else if (num >= 7 && num < 9) level = "Notable";
else if (num >= 9 && num <= 10) level = "Sobresaliente";

console.log(level);
