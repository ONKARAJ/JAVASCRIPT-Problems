//using continue

// Step 1: Set up a string variable
let output = "";

// Step 2: Select a number to skip
let skipNumber = 5;

// Step 3–6: Loop from 1 to 10, skip the selected number
for (let i = 1; i <= 10; i++) {
  // Step 4: Check if current number equals skipNumber
  if (i === skipNumber) {
    continue; // Step 5: Skip this iteration
  }
  output += i + " "; // Step 6: Append value to output
}

// Step 7: Output the result
console.log("Using continue:", output);

//using break
// Reset output
output = "";

// Step 2 remains the same
skipNumber = 5;

// Step 3–6: Loop from 1 to 10, stop at the skip number
for (let i = 1; i <= 10; i++) {
  // Step 4: Check if current number equals skipNumber
  if (i === skipNumber) {
    break; // Step 5: Exit the loop
  }
  output += i + " "; // Step 6: Append value to output
}

// Step 7: Output the result
console.log("Using break:", output);
