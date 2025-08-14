const groceryList = [
  { name: "Bread", price: 2 },
  { name: "Cheese", price: 10 },
  { name: "Egg", price: 20 },
  { name: "Bacon", price: 12 },
  { name: "Coffe", price: 18 },
  { name: "Milk", price: 1 },
];

const groceryPrices = [2, 10, 20, 12, 18, 1];

// sort
// DEFAULT -> converts elements to a string and compare
// callback function to customize the comparison
// DOESNT RETURN A NEW VALUE

// groceryPrices.sort();

// console.log(groceryPrices);

// callback function will receive two values
// should return a number
// 1 >
// 0 === same position
// -1 <
groceryPrices.sort(function (lesserValue, biggerValue) {
  //   console.log(valueA, valueB);
  return biggerValue - lesserValue;
});

console.log(groceryPrices);
