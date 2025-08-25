// 1 - target
const phoneInput = document.getElementById("phone");

// 2 - add event listener
phoneInput.addEventListener("keydown", avoidSpecialChars);
phoneInput.addEventListener("keyup", avoidSpecialChars);

// event
// formEvent ->
// mouseEvent -> where the user clicked
// keyboardEvent -> which key was pressed
// wheelEvent -> where the page was scrolled

// 3 - have an action
function avoidSpecialChars(event) {
  // event.preventDefault();
  //   const specialChar = "$";
  // ~`!?@#$%^&*()-+={[]}\|/';:<>,.
  // create an array that have every special char
  const specialChars = ["~", "`", "!", "?", "$"];

  console.log("Key", event.key);
  console.log("Code", event.code);

  specialChars.forEach((specialChar) => {
    if (event.key === specialChar) {
      event.preventDefault();
      console.log("Stop! The", event.key, "isn't allowed");
    } else {
      console.log("Good to go!");
    }
  });
}

// 3 - have an action
function avoidSpecialChars(event) {
  // create an string that have every special char
  const specialChars = "~`!?@#$%^&*()-+={[]}|/';:<>,.";

  console.log("Key", event.key);
  console.log("Code", event.code);

  if (specialChars.includes(event.key)) {
    event.preventDefault();
    console.log("Stop! The", event.key, "isn't allowed");
  } else {
    console.log("Good to go!");
  }
}
