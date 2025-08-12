// grab the form by ID or any other selector
const form = document.getElementById("form-subscribe");

console.log(form);

// DO NOT DO THAT
const nameValue = document.getElementById("name").value;

// add the event listener when is trying to submit
// element.addEventListener("type", function);
form.addEventListener("submit", function (event) {
  // console.log(event);
  event.preventDefault();

  //values from the form
  const nameInput = document.getElementById("name");
  console.log(nameInput.value);
  console.log(nameValue);

  const emailInput = document.getElementById("email");
  console.log(emailInput.value);

  const ageInput = document.getElementById("age");
  console.log(ageInput.value);

  console.log("Event target: ", event.currentTarget);

  console.log("The form was submitted!");
});

// two parameteres
// action type -> submit
// function(event) ->  form handle

// function bananas() {
//   return "bananas";
// }

// const number = 4;
// bananas(number);
// bananas(4);
