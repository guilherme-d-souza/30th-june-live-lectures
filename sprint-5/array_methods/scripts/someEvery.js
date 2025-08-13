// some
// some item inside the array checks the callback criteria
// returns true or false
const groceryList = ["Bread", "Cheese", "Egg", "Coffe"];

function hasLetterE(groceryItem) {
  return groceryItem.toLowerCase().includes("e");
}

function hasLetterY(groceryItem) {
  return groceryItem.toLowerCase().includes("y");
}

const someItemHasY = groceryList.some(hasLetterY);
console.log(someItemHasY);

// every
// every item inside the array checks the callback criteria
// returns true or false

const everyItemHasE = groceryList.every(hasLetterE);
console.log(everyItemHasE);
