const groceryList = ["Bread", "Cheese", "Egg", "Bacon", "Coffe", "Milk"];
const groceryChildList = ["Chocolate", "Candy", "Soccer ball"];
const fullList = groceryList.concat(groceryChildList);

// forEach way to do
// returns nothing
// iterate each array element
//                 anonymous function
const result = fullList.forEach(function (groceryItem) {
  const ulList = document.getElementById("grocery-list");
  ulList.innerHTML += "<li>" + groceryItem + "</li>";
  return groceryItem;
});

console.log(result);

// map
// returns another array
// change structure
// iterate each array element

const changedList = fullList.map(function (groceryItem) {
  return {
    name: groceryItem,
    quantity: groceryItem.length,
  };
});

console.log(changedList);

const removeBreadList = fullList.map(function (groceryItem) {
  if (groceryItem === "Bread") {
    return;
  } else {
    return groceryItem;
  }
});

console.log(removeBreadList);
