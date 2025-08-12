// document -> everything inside the HTML page

// getElementById
// parameter -> element ID
// returns -> the element or nothing (null)
const firstTitle = document.getElementById("first-title");
console.log(firstTitle);

// getElementsByTagName
// parameter -> elements tag
// plural -> returning an array
// returns -> an array of elements (empty or with something)
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// getElementsByClassName
// parameter -> elements class
// plural -> returning an array
// returns -> an array of elements (empty or with something)
const modals = document.getElementsByClassName("modal");
console.log(modals);

// QUERY SELECTORS
// Get the first element with the class "container"
let modalBackground = document.querySelector(".modal__background");
console.log(modalBackground);

// Get all list items
let listItems = document.querySelectorAll("li");
console.log(listItems);
