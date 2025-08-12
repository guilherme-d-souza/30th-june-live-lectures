// SELECT THE ELEMENT THAT YOU WANT
const modalButton = document.querySelector(".modal__button");
console.log(modalButton);
let countClick = 0;

// ADD AN EVENT RELATED TO THE ELEMENT
// VARIABLE.addEventListener("event_type", function)
modalButton.addEventListener("click", function () {
  countClick++;
  console.log("Button clicked!", countClick);
});
