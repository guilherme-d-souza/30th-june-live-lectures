// Promises -> asynchronous

// .then() and .catch()

// async await -> try catch block

try {
  // try here
  await fetch("http://api.example.com"); // this triggers an errors
  console.log("Hello!");
} catch (error) {
  console.error("Error: ", error);
}

// A
// Hello!
// Error: ahsduhas

// B
// Hello!

// C - > RIGHT ONE
// Error: ashdhau

// D
//

fetch("http://api.example.com")
  .then((response) => console.log("Bananas!"))
  .catch((error) => console.log("We got an error!"));

console.log("Hello!");

// A -> RIGHT ONE
// Hello!
// Bananas!

// B -> WHY THIS IS WRONG?
// We got an error!
// Hello!

// C
// Bananas!
// We got an error!
// Hello!

// D
// Bananas!
// Hello!
