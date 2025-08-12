// function
// reusable code -> something is repeating
// goes in (parameteres) -> goes out (returned values);

// create the function
// function word
// function name (camelCase or under_score)
// open parenthesis
// add multiple parameteres joined by comma
// close parenthesis
// open and close curly brackets

// interact with the function
function example_sum() {
  console.log(1 + 1);
}

// invoke/call/interact the function
// function name
// open parenthesis
// add multiple parameteres joined by comma
// close parenthesis
example_sum();

// sum_only_params function
// we gonna receive 2 numbers
// and print the sum result
// function - receive = parameters
function sum_only_params(number1, number2) {
  console.log(number1 + number2);
}

const width = 300;
const height = 400;

// call function
sum_only_params(width, height);
sum_only_params(30, 40);

// create the function
// function word
// function name (camelCase or under_score)
// open parenthesis
// add multiple parameteres joined by comma (not required)
// close parenthesis
// open curly brackets
// add my code
// return word with a value next to it (not required)
// and close brackets
function create_person(name, birthDate) {
  let person = {
    username: name,
    date: birthDate,
  };
  return person;
}

console.log("before create_person");
// when a function has a return value
// I can use that as a value
const guilherme = create_person("Guilherme", "10/22/1997");
const enrique = create_person("Enrique", "10/22/1997");
const sara = create_person("Sara", "10/22/1997");
const farhat = create_person("Farhat", "10/22/1997");

console.log(guilherme);
console.log(enrique);
console.log(sara);
console.log(farhat);

// sum function
function sum(number1, number2) {
  console.log("summing...");
  console.log(number1);
  console.log(number2);
  return number1 + number2;
}

const result = sum(1371, 2765);
console.log(result);
