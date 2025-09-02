// syntax
// keyword class
// className YourObject
// OPEN CURLY BRACKETS
// method/function constructor
// CLOSE CURLY BRACKETS

let person = {
  name: "Ronald",
  ssn: "08080808",
  address: "Avenue Bananas",
  age: 40,
  isSingle: false,
};

class Person {
  // constructor syntax
  // keyword constructor
  // open close parenthesis -> parameters
  constructor(name, ssn, address, age, isSingle) {
    // this.propertyName = value
    this.username = name;
    this.ssn = ssn;
    this.address = address;
    this.age = age;
    this.isSingle = isSingle;
    this.money = 10000;
  }

  showAge() {
    console.log(this.age);
  }

  // when you are inside the class
  // dont need to type keyword function
  getOlder() {
    this.age++; // real object
  }

  getMarried() {
    // encapsulation
    this.money -= 300;
    this.isSingle = false;
  }

  getDivorced() {
    this.isSingle = true;
  }
}

// const/let variableName = new ClassName()
// new Class() -> constructor method/function
const guilherme = new Person("Guilherme", "123-123", "Brazil", 27, false);
const gabriela = new Person("Gabriela", "321-321", "Brazil", 19, false);
const baby = new Person("Baby");

console.log(guilherme);
console.log(gabriela);

// 22 Oct -> anniversary
guilherme.getOlder();
console.log(guilherme);

// 13 March -> anniversary
gabriela.getOlder();
console.log(gabriela);

// class -> structure
// when we call the constructor method -> real object
// keyword -> this -> real class object (instance)
