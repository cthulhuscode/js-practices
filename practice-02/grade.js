const prompt = require("prompt-sync")();

const grade = parseInt(prompt("Ingresa calificación: "));

const getGradeLevel = (grade) => {
  if (grade === 10) return "Sobresaliente";
  else if (grade >= 7 && grade <= 9) return "Bien";
  else if (grade >= 0 && grade <= 6) return "Malo";
};

console.log("Calificación: " + getGradeLevel(grade));
