console.log("This will be the script for strings!");

// strings -> wrap the text over quotations
// "Guilherme"
// "bananas"
// single quotes
// 'Guilherme'
// 'bananas'
// backticks
// `Guilherme
// bananas`

const nameQuotes = "Guilherme";
const nameSingleQuotes = "Guilherme"; // 'Guilherme'
const nameBackticks = `Guilherme
 de Souza`;

// indexOf
// search the first occurence position of a string inside
// other string
const position = nameQuotes.indexOf("y"); // -1 = was not found

console.log(nameQuotes);
console.log(position); //5

// const nickname = nameQuotes.slice(position, position + 3);
// console.log(nickname);

// lastIndexOf
// search the last occurence position of a string inside
// other string
const lastOccurence = nameQuotes.lastIndexOf("e"); //8
console.log(lastOccurence);

// includes
// true or false to the target string
const hasLetterG = nameQuotes.includes("G");
console.log("Guilherme has the letter G?", hasLetterG);

const hasLetterY = nameQuotes.includes("Y");
console.log("Guilherme has the letter Y?", hasLetterY);

// const isModalOpen = modalClass.includes("modal-is_open");

// toUpperCase
const upperCased = nameQuotes.toUpperCase();
console.log(upperCased);
// toLowerCase

const lowerCased = nameQuotes.toLowerCase();
console.log(lowerCased);

// split
// split a string based on other string
// returns an string array
const time = "08:30";
const splitTime = time.split(":");
console.log(splitTime);
console.log(
  "Right now it's " + splitTime[0] + " hours and " + splitTime[1] + " minutes"
);

const fullName = "Guilherme Augusto de Souza";
const splitName = fullName.split(" ");
const firstName = splitName[0];
const secondName = splitName[1];
const surname1 = splitName[2];
const surname2 = splitName[3];
console.log(surname2);

const className = "modal modal-is_open";
const splitClassName = fullName.split(" ");

console.log(surname2);

// trim
// removing extra spaces from the string
// user input -> sanitized data

const banana = "    This is a banana                  ";
const bananaTrim = banana.trim();
console.log(banana);
console.log(banana.length);
console.log(bananaTrim);
console.log(bananaTrim.length);
