// Step 1: Create an empty array
let myArray = [];

// Step 2: Run a loop 10 times, adding incrementing values
for (let i = 0; i < 10; i++) {
  myArray.push(i + 1); // Adds values from 1 to 10
}

// Step 3: Log the array into the console
console.log("Array contents:", myArray);

// Step 4: Use a for loop to iterate and output each value
console.log("Using traditional for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Step 5: Use a for-of loop to output each value
console.log("Using for-of loop:");
for (let value of myArray) {
  console.log(value);
}
