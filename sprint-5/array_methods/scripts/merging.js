const groceryList = ["Bread", "Cheese", "Egg", "Bacon", "Coffe", "Milk"];

const groceryChildList = ["Chocolate", "Candy", "Soccer ball"];

// array.concat(otherArray)
// only returning values
// parameter for concat will add on the end of the array
const fullList = groceryList.concat(groceryChildList);

console.log(fullList);

// for loop way to do
for (let index = 0; index < fullList.length; index++) {
  const groceryItem = fullList[index];
  const ulList = document.getElementById("grocery-list");
  ulList.innerHTML += "<li>" + groceryItem + "</li>";
}

// join
// creating a string with each element, separeted by the parameter that we added
const fullListString = fullList.join(", ");
const groceryResume = document.getElementById("grocery-list-resume");
groceryResume.innerText = fullListString;

// let result = "";

// for (let index = 0; index < fullList.length; index++) {
//   const groceryItem = fullList[index];
//   result += groceryItem + ", ";
// }

// console.log(result);

console.log(fullListString);

// console.log(groceryList);
// console.log(groceryChildList);
