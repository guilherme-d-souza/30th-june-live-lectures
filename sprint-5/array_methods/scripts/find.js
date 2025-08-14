const groceryList = ["Bread", "Cheese", "Egg", "Bacon", "Coffe", "Milk"];

const findFirstChesse = (groceryItem) => {
  return groceryItem.toLowerCase().includes("cheese");
};

// find
// receives a callback that returns true or false
// returns the first item that matches the criteria
const item = groceryList.find(findFirstChesse);
console.log(item);
