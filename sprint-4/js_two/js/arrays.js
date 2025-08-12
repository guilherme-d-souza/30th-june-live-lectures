// type of variable (let (changed), const (constant) or var)
// variable name - anything that doesnt have spaces
// assignment symbol (equals = )
// value

// array is list type
// [ item1, item2 ]
// open square brackets and separate items by comma
let shopping_list = [];

console.log("- Empty array");
console.log(shopping_list);

//                 0        1       2         3         4       5
shopping_list = ["Beans", "Rice", "Meat", "Lettuce", "Eggs", "Tomato"];

console.log("- Full Shopping array");
console.log(shopping_list);

const rice_position = 1;

// Access an item in an array
// variable_name
// open square brackets
// item positioning number (variable that is a number works as well)
// close square brackets
console.log("- First list item");
console.log(shopping_list[0]);
console.log("- Second list item");
console.log(shopping_list[rice_position]);
console.log("- Tenth list item");
console.log(shopping_list[10]); // undefined -> the value wasnt defined yet

// PROGRAMMING - STUFFS STARTS IN 0
// const spots_images = ["./images/snow", "./images/restaurant"];

// Iterating array

console.log("- Shopping list length");
console.log(shopping_list.length);

console.log("- Print all Shopping list with for loop");

// we define a variable -> count 0
// check if the stop condition is false -> 0 < 6 = true
// otherwise, run the code
// after run the code, apply the increment logic -> count 1
// check if the stop condition is false -> 1 < 6 = true
// otherwise, run the code
// after run the code, apply the increment logic -> count 3
// ...
// check if the stop condition is false -> 6 < 6 = false
// stop the code inside the for when stop condition was attend

for (let count = 0; count < shopping_list.length; count++) {
  console.log("- Count value: ", count);
  console.log(shopping_list[count]);
}

// modify an item from the array
console.log("- Sixth item: ", shopping_list[5]);
console.log(shopping_list);
shopping_list[5] = "Cucumber";
console.log("- Sixth item after the change: ", shopping_list[5]);
console.log(shopping_list);

// add and remove items from the array

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Initial value: ", fruits);

// push() -> add a new item in the end of the list
fruits.push("Kiwi"); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log("After push the value Kiwi: ", fruits);

// pop() -> removing the last item in the list
fruits.pop(); // ["Banana", "Orange", "Apple", "Mango"]
console.log("After pop: ", fruits);

// shift() -> removing the first item in the list
fruits.shift(); // ["Orange", "Apple",  "Mango"]
console.log("After shift: ", fruits);

// unshift() -> add an item as the first item in the list
fruits.unshift("Lemon"); // ["Lemon", "Orange", "Apple",  "Mango"]
console.log("After unshift the value Lemon: ", fruits);
