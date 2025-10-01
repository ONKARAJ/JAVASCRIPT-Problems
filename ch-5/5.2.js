// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));
// {
//   console.log("Thank you! Your number is " + number);
// }

// Step 1: Set the starting counter to 0
let counter = 0;

// Step 2: Create a variable, step, to increase the counter
let step = 10; // You can change this value to any increment you'd like

// Step 3 & 4: Use a do...while loop to print and increment until counter reaches 100 or more
do {
  console.log("Counter:", counter);
  counter += step;
} while (counter < 100);
{
  console.log("Counter:", counter);
}
