// strictly equals (equals)
// symbol ===
const my_name = "Guilherme";
const sisters_name = "Gabriela";
const number = 1; // number
const string = "1"; // string

console.log("- Is Guilherme equals to Gabriela?");
console.log(my_name === sisters_name);

console.log("- Is Guilherme equals to Guilherme?");
console.log(my_name === "Guilherme");

console.log("- Is number 1 equals to string 1?");
console.log(number === string);

// equals (weak equals) - AVOID THIS RIGHT NOW
// symbol ==

console.log("- Is number 1 equals to string 1? ==");
console.log(number == string);

// strictly different then
// !==
console.log("- Is Guilherme different to Gabriela? !==");
console.log(my_name !== sisters_name);

console.log("- Is number 1 different to string 1? !==");
console.log(number !== string);

// different then (weak different) - AVOID THIS AS WELL
// !=
console.log("- Is number 1 different to string 1? !=");
console.log(number != string);

console.log(5 <= 5);
