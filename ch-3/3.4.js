let dog = {
  name: "dog",
  legs: 4,
  color: "white",
  age: 5,
};

// updating objects properties
dog.name = "ashutosh";
dog.legs = 3;
console.log(dog);

//assigning values
let dog2name = dog.name;
let dog3age = dog.age;
console.log(dog2name);
console.log(dog3age);

//3.4
// 1. Create a new myCar object with properties
let myCar = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Silver",
  mileage: 30000,
  isElectric: false,
};

// 2. Create a variable that holds the string value "color"
let propertyName = "color";

// Use bracket notation to update the color
myCar[propertyName] = "Blue";
console.log(myCar);

// 3. Reuse the variable and assign it to "forSale"
propertyName = "forSale";

// // Add the property using bracket notation
myCar[propertyName] = true;

// 4. Output make and model
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

// 5. Output the value of forSale
console.log("For Sale:", myCar.forSale);
