// reduce
// reduce the array to only one value
// also expecting a callback function
// parameters passed to the callback is
// - accumulator
// - currentValue
const groceryList = [
  { name: "Bread", price: 2 },
  { name: "Cheese", price: 10 },
  { name: "Egg", price: 20 },
  { name: "Bacon", price: 12 },
  { name: "Coffe", price: 18 },
  { name: "Milk", price: 1 },
];

// sum every item price in the list (total price)
let total = 0;

for (let index = 0; index < groceryList.length; index++) {
  const groceryItem = groceryList[index];
  total += groceryItem.price;
}

console.log("Total with for: " + total);

// callback function receives the accumulator and currenValue
// next accumulator value
function sumGroceryItemPrice(total, groceryItem) {
  return total + groceryItem.price;
}

const totalReduce = groceryList.reduce(sumGroceryItemPrice, 0);

console.log("Total with reduce: " + totalReduce);
