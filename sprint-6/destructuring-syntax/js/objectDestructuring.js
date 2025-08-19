// simplify how to create variables/params
// similar to a shorthand operator

const person = {
  username: "Ronald",
  age: 42,
  money: 0,
  kids: 2,
  surname: "McDonald",
  pocket: {
    pen: 1,
    paper: 0,
    phone: "Samsung Galaxy",
  },
};

console.log(person.username);

const personName = person.username;

console.log(personName);

// using creating variables
//                  spread operator
// const copyArray = [ ...array ];
const copyPerson = { ...person };

// const/let { property1, property2 } = object
// const username = person.username;
// const money = person.money;
// const kids = person.kids;
// const surname = person.surname;
const { google, surname, money, kids } = person;

console.log("Google property value: ", google);

// how we rename properties using destructuring
// const balance = person.money;
// const/let { property1: newPropertyName } = object
// this is NOT changing the property value
const { money: balance } = person;

console.log("Balance variable value: ", balance);

// nested destructuring
// const phone = person.pocket.phone;
// const { pocket } = person; // username, age, kids, money
// const { phone } = pocket; // phone, paper, pen
// const/let { parentProperty: { targetProperty } } = object
const {
  pocket: { phone, pen },
} = person;
console.log("Phone value: ", phone);
console.log("Pen value: ", pen);
