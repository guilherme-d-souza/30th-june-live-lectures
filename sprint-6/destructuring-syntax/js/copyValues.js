const person = {
  name: "Ronald",
  age: 42,
};

// will copy the reference
const copyPerson = person;

// its changing the reference in the
// computer memory
copyPerson.name = "John";

console.log(person); // Ronald
console.log(copyPerson); // John

const number = 42;

let newNumber = number;

newNumber = 999999;

console.log(number); // 42
console.log(newNumber); // 999999
