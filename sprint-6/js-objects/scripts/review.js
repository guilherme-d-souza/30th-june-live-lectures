// objects
// curly brackets
// doesn't have any properties
// let person = {};

// reassigning the value
let person = {
  name: "Ronald",
  ssn: "08080808",
  address: "Avenue Bananas",
  age: 40,
  isSingle: false,
  family: [
    {
      name: "Mary",
    },
  ],
};

console.table(person);
// add new parameter without reassigning
// dot notation .
// object.parameter = 'new value';
person.personality = "Calm";
console.table(person);

// square brackets []
// object["parameter"] = 'new value';
// array[position] = 'new value';
// string[position]
// index data type -> object parameter and array position
person["surname"] = "McDonald";
console.table(person);

// this is a string
const loginType = document.getElementById("login-type").textContent;

let login = {
  password: document.getElementById("password").textContent,
};

// if (loginType === "email") {
//   login.email = document.getElementById("login-type-value").textContent;
// } else {
//   login.username = document.getElementById("login-type-value").textContent;
// }

console.log(loginType);
login[loginType] = document.getElementById("login-type-value").textContent;
console.table(login);
