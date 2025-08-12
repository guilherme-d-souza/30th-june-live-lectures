// variables
// store data (string, number, boolean, ...)

// TYPE (LET CONST VAR) -> ONLY USE WHEN INITIALIZE THE VALUE
// NAME (ANYTHING NOSPACE OR DASH) -> this is for us, not the computer
// = ATTRIBUTion or ASSIGNMENT
// VALUE (any kind of data)

// let
// letting us to change value in the scope

let number_of_bananas = 5;

console.log("- number_of_bananas initialized");
console.log(number_of_bananas);

number_of_bananas = 7; // changing the value

console.log("- number_of_bananas changed to other value");
console.log(number_of_bananas);

//const
// constant value - cannot change
// will be the same value from the initialization forever

const number_of_books = 5;

console.log("- number_of_books initialized");
console.log(number_of_books);

// number_of_books = 7; // TRY change the value = assignment

// console.log("- number_of_books changed to other value");
// console.log(number_of_books);

// NULLISH VALUES

// null
// when something didnt happen or doesnt have a value
let deactivation_date = "01/01/2001";
deactivation_date = null; // ABSENCE

// undefined
// a variable that doesn't have been initialized
// not defined
let cat_box;
console.log("- value inside the cat_box");
console.log(cat_box);

// NaN
// not a valid number
let cool_number = 0;
cool_number = 0 / 0;
console.log("- value inside the cool_number");
console.log(cool_number);
