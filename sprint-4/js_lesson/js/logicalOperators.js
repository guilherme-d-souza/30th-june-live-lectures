// x < 10 && y > 1
// x is lesser than 10 AND y is greater than 1

let isMobile = true;
let isAppleDevice = true;
let releaseYear = 2025;

if (isMobile && isAppleDevice && releaseYear > 2018) {
  console.log("Iphone"); // font-family: --apple-system
}

// name === "Guilherme" || name === "Gabriela"
// if the name variable is equals to Guilherme OR Gabriela
let this_name = "James";

if (this_name === "Guilherme" || this_name === "Gabriela") {
  console.log("Its from the teacher family");
} else {
  console.log("Hello stranger!");
}

if (
  (this_name === "Guilherme" || this_name === "Gabriela") &&
  this_name.length > 8
) {
}

// not
// !
const dark_theme = false;

if (!dark_theme) {
  console.log("light theme");
}
