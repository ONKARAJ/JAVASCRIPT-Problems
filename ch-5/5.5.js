// Step 1: Create a grid array variable
let grid = [];

// Step 2: Set the number of cells
const totalCells = 64;

// Step 3: Set a counter to 0
let counter = 0;

// Step 4: Create a global variable for the row array
let row;

// Step 5: Loop from 0 to totalCells + 1
for (let i = 0; i <= totalCells; i++) {
  // Step 6: Check if counter is divisible by 8 (number of columns)
  if (counter % 8 === 0) {
    // Step 7: Check if row is defined
    if (row !== undefined) {
      grid.push(row); // Add completed row to grid
    }

    // Step 8: Clear the row array
    row = [];
  }

  // Step 9: Increment the counter
  counter++;

  // Step 10: Create a temp variable and push to row
  let cellValue = counter;
  row.push(cellValue);

  // Step 11: Check if counter equals totalCells
  if (counter === totalCells) {
    grid.push(row); // Add final row to grid
  }
}

// Step 13: Output the grid
console.table(grid);
