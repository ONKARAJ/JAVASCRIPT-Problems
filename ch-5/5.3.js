// Step 1: Setup a blank array
let myWork = [];

// Step 2–5: Use a for loop to create 10 lesson objects with alternating status
for (let i = 1; i <= 10; i++) {
  // Step 3: Use a ternary operator to alternate status
  let status = i % 2 === 0 ? false : true;

  // Step 4: Create a lesson object
  let lesson = {
    name: `Lesson ${i}`,
    status: status,
  };

  // Step 5: Push the object to the array
  myWork.push(lesson);
}

// Step 6: Output the array to the console
console.log(myWork);
