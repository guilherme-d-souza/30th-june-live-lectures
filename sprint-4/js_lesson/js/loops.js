const img = "./images/dummy.png";
const text = "Dummy image title";

// add an item 6 times
// console.log("adding the image and the text...");
// console.log("adding the image and the text...");
// console.log("adding the image and the text...");
// console.log("adding the image and the text...");
// console.log("adding the image and the text...");
// console.log("adding the image and the text...");

// for
// for (initialization; condition_to_stop; increment) {
//         code to be executed
// }
// create a variable
// when this variable reachs X value, stop
// increment that X times

// LOOP REPEATS THE CODE
let number = 1;
console.log("number");
console.log(number);
number++;
console.log("after increment");
console.log(number);

console.log("before loop");

for (let number_of_items = 0; number_of_items <= 6; number_of_items += 1) {
  console.log(number_of_items);
  console.log("adding the image and the text...");
}

console.log("after loop");

// while
// while (condition_to_stop) {
//        code to be executed
//        condition_to_stop needs to be changed inside the while
// }

let cool_number = 6;
while (cool_number > 0) {
  console.log("adding the image and the text in the WHILE...");
  cool_number -= 1;
}
