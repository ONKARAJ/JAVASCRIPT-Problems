let people = {
  freinds: [],
};

let per1son1 = {
  Firstname: "ashutosh",
  age: 20,
  city: "delhi",
};

let per2son2 = {
  Firstname: "rahul",
  age: 22,
  city: "noida",
};

let per3son3 = {
  Firstname: "sachin",
  age: 21,
  city: "gurgaon",
};

people.freinds.push(per1son1, per2son2, per3son3);
console.log(people);

//Company product catalog

// 1. Create an array to hold an inventory of store items
let inventory = [];

// 2. Create three items with name, model, cost, and quantity
let item1 = {
  name: "Laptop",
  model: "Dell Inspiron",
  cost: 750,
  quantity: 10,
};

let item2 = {
  name: "Smartphone",
  model: "iPhone 14",
  cost: 999,
  quantity: 25,
};

let item3 = {
  name: "Headphones",
  model: "Sony WH-1000XM5",
  cost: 350,
  quantity: 50,
};

// 3. Add all three items to the inventory array
inventory.push(item1, item2, item3);

// Log the full inventory
console.log("Full Inventory:", inventory);

// 4. Access the quantity of the third item
console.log("Quantity of third item:", inventory[2].quantity);

// --- Extra Experiment: Add a new item and access its properties
let item4 = {
  name: "Smartwatch",
  model: "Samsung Galaxy Watch 6",
  cost: 299,
  quantity: 15,
};

// Add new item to inventory
inventory.push(item4);

// Log the newly added item’s cost
console.log("Cost of Smartwatch:", inventory[3].cost);
