// Step 1: Set up a blank array for the final multiplication table
let multiplicationTable = [];

// Step 2: Set a value for how many numbers to multiply (e.g., 10)
let size = 10;

// Step 3–5: Build the table using nested loops
for (let row = 1; row <= size; row++) {
  let tempRow = []; // Temporary array to hold row values

  for (let col = 1; col <= size; col++) {
    tempRow.push(row * col); // Multiply row and column values
  }

  multiplicationTable.push(tempRow); // Add the row to the final table
}

// Output the final multiplication table
console.log("Multiplication Table:");
console.table(multiplicationTable);
