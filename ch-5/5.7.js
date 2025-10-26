// 1. Create a simple object with three items
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

// 2. Use a for...in loop to get the property names and values
console.log("Object properties and values:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 3. Create an array with the same three items
let carArray = ["Toyota", "Camry", 2022];

// Use a for loop to output array values
console.log("Array values:");
for (let i = 0; i < carArray.length; i++) {
  console.log(carArray[i]);
}
