// Step 1: Set the maximum value for the guessing range
const maxValue = 5;

// Step 2: Generate a random number between 1 and maxValue
const solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution (for development):", solution); // Comment this out when game is complete

// Step 3: Track whether the answer is correct
let isCorrect = false;

// Step 4 & 5: Use a while loop to prompt user until correct guess
while (!isCorrect) {
  let userGuess = prompt(`Guess a number between 1 and ${maxValue}:`);
  let guessNumber = Number(userGuess);

  if (guessNumber === solution) {
    alert("Congratulations! You guessed the correct number.");
    isCorrect = true;
  } else if (guessNumber < solution) {
    alert("Too low! Try again.");
  } else if (guessNumber > solution) {
    alert("Too high! Try again.");
  } else {
    alert("Invalid input. Please enter a number.");
  }
}
