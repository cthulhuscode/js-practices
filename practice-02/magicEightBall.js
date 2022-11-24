const prompt = require("prompt-sync")();

let userName = "Enrique";
userName !== "" ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = prompt("Ask a question: ");
console.log(`Your question is: '${userQuestion}'`);

const randomNumber = Math.floor(Math.random() * 8);

let eigthBall = "";
switch (randomNumber) {
  case 0:
    eigthBall = "It is certain";
    break;
  case 1:
    eigthBall = "It is decidedly so";
    break;
  case 2:
    eigthBall = "Reply hazy try again";
    break;
  case 3:
    eigthBall = "Do not count on it";
    break;
  case 4:
    eigthBall = "My sources say no";
    break;
  case 5:
    eigthBall = "Outlook not so good";
    break;
  case 6:
    eigthBall = "Signs point to yes";
    break;
  case 7:
    eigthBall = "It could be";
    break;
  case 8:
    eigthBall = "Don't even think about it";
    break;
  default:
    eigthBall = "Cannot predict now";
}

console.log("Answer: " + eigthBall);
