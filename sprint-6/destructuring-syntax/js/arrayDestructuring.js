// first position/index -> 0
const groceryList = ["Bread", "Cheese", "Egg", "Bacon", "coffee", "Milk"];

// const bread = groceryList[0];
// const chesse = groceryList[1];
// const coffee = groceryList[4];

// destructuring
// similar to the object
// const/let [ firstElement, secondElement ] = array
// when we are destructuring an array
// its ALWAYS related to position
//      0       1
const [bread, chesse, , , coffee] = groceryList;
// this is confusing -> we'll see in React and other stuff
console.log("coffee variable value:", coffee); // coffee
