// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Child class
// extends -> enables all the methods
// and properties from the previous class
class Dog extends Animal {
  constructor(breed) {
    // keyword super -> to call the extended constructor
    super("dog"); // Call the parent constructor
    this.breed = breed;
  }

  // overwrite function
  speak() {
    console.log(`${this.name} ${this.breed} barks.`);
  }
}

// extends -> needs the super on the constructor
class Bird extends Animal {
  constructor() {
    super("bird");
  }

  fly() {
    console.log(`${this.name} is flying!`);
  }
}

const bird = new Bird();
bird.speak();
bird.walk();
bird.fly();

const dog = new Dog("Pitbull");
testAnimal(dog);

// type Animal
// Dog -> Animal
function testAnimal(animal) {
  animal.speak();
  animal.walk();
}
