// shorthand operator for OBJECTS
// creating an object
// propertyName: value,

const age = document.getElementById("age").textContent;

const person = {
  name: "Guilherme",
  age, // property with the variable name and value
  // age: age, // property -> age / value -> variable age
  ["age" + age]: "Cool Property",
  wings: 2,
};

console.table(person);

// remove a property
//
// person["age" + age].delete; // THIS DOESNT WORK
// person["age" + age] = null;// THIS DOESNT WORK

// person.wings = 0;

// delete object.propertyName
// delete object["propertyName"]

delete person["age" + age];
delete person.wings;

console.table(person);
