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

function add(number1, number2) {
  return number1 + number2;
}

// create an arrow function
// open parenthesis
// add multiple parameteres joined by comma (not required)
// close parenthesis
// arrow symbol (equals and greater than) =>
// add my code (its being returned)
// syntax for one code line ONLY

// store the function in variable
const addArrow = (number1, number2) => number1 + number2;

console.log(addArrow(1, 2));

// create an arrow function
// open parenthesis
// add multiple parameteres joined by comma (not required)
// close parenthesis
// arrow symbol (equals and greater than) =>
// open curly brackets
// add my code (its being returned)
// return word with a value next to it (not required)
// close curly brackets
// syntax for one code line ONLY

// THIS ONE IS THE MOST USED

const addMultipleLines = (number1, number2) => {
  console.log("adding cool numbers...");
  return number1 + number2;
};

const result = addMultipleLines(11, 22);
console.log(result);
