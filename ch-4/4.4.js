// 1. Generate random number 0-5
let randomNum = Math.floor(Math.random() * 6);

// 2. Prompt user for input
let userQuestion = prompt("Ask me a question:");

// 3 & 4. Switch statement to generate response
let response;
switch (randomNum) {
  case 0:
    response = "Yes, absolutely!";
    break;
  case 1:
    response = "No way, try again later.";
    break;
  case 2:
    response = "It looks promising.";
    break;
  case 3:
    response = "I wouldn’t count on it.";
    break;
  case 4:
    response = "Maybe… it’s too soon to tell.";
    break;
  case 5:
    response = "Definitely, go for it!";
    break;
  default:
    response = "Error: something went wrong.";
}

// 5. Output original question + random response
console.log("You asked: " + userQuestion);
console.log("My answer: " + response);
