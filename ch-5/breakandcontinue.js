let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 1999,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2000,
    color: "black",
  },
];

// use a regular for loop to traverse to the array of car objects and display the the  car which is in year 2000 and red in color
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year === 2000) {
    if (cars[i].color === "red") {
      console.log(cars[i]);
      break; // exit the loop once the car is found
    }
  }
}
