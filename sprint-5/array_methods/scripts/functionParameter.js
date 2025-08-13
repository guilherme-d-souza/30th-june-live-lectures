// function as a parameter

function crazyOperation(number1, number2, calculationFunction) {
  return calculationFunction(number1 * 10, number2 / 20);
}

const addFunction = (n1, n2) => {
  return n1 + n2;
};

const result = crazyOperation(100, 80, addFunction);

console.log(result); // 180

function forEach(userFunction) {
  for (let index = 0; index < array.length; index++) {
    return userFunction(array[index]);
  }
}
