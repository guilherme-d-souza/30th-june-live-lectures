class Car {
  //   private value = 0;

  constructor(brand, model, value) {
    this.brand = brand;
    this.model = model;
    this.value = value;
  }

  displayInfo() {
    console.log(`This is a ${this.brand} ${this.model}.`);
  }
}

const myCar = new Car("Volskwagen", "Gol", 200);

// const myCar = {
//   brand: "Volskwagen",
//   model: "Gol",
//   displayInfo: () => console.log("");
// }
console.log(myCar.brand);
console.log(myCar.value); // this wouldnt work
