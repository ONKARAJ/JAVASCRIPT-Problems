// Step 1: Create an empty array to hold the table data
let myTable = [];

// Step 2: Set variable values for rows and columns
let numRows = 5;
let numCols = 4;

// Step 3: Initialize the counter
let counter = 0;

// Step 4–8: Build the table using nested loops
for (let row = 0; row < numRows; row++) {
  let tempTable = []; // Step 4: Temporary array for each row

  for (let col = 0; col < numCols; col++) {
    counter++; // Step 6: Increment counter
    tempTable.push(counter); // Step 7: Add cell value to row
  }

  myTable.push(tempTable); // Step 8: Add row to main table
}

// Step 9: Output the table
console.table(myTable);
console.log(myTable);
