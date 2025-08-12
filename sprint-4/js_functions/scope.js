// curly brackets separate scopes (expect objects)
// functions, if, else, for, while,

function create_person(name, birthDate) {
  // only exists until the end of the curly brackets
  let person = {
    username: name,
    date: birthDate,
  };
  return person;
}

const person = "";

// global scope - declaration is global
let a;
if (true) {
  // local scope - if scope
  const b = 10;
  a = 10; // modify in a scope
} else {
  a = 20;
}

//global
console.log(a);
console.log(person);
