const groceryList = ["Bread", "Cheese", "Egg", "Bacon", "Coffe", "Milk"];

// filter
// receives a function as a parameter (callback)
// the callback function should return a boolean (true OR false)
// if true -> add to the return array
// if false -> ignore
// returns a new array

function lastLetterE(groceryItem) {
  const lastLetter = groceryItem.at(-1);
  return lastLetter === "e";
}

function hasLetterE(groceryItem) {
  return groceryItem.toLowerCase().includes("e");
}

const filteredList = groceryList.filter(hasLetterE);
console.log(filteredList);
