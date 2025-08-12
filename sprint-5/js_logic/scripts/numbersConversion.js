const number = "108";

function add(number1, number2) {
  return number1 + number2;
}

let result = add(2, number);

console.log(result);

result = add(2, parseInt(number));

console.log(result);
