const phoneForm = document.getElementById("phoneForm");
const phoneInput = document.getElementById("phone-input");
const fakeButton = document.getElementById("fake-button");

console.log(phoneForm);

console.log(document.forms.phoneForm);

document.forms.phoneForm.addEventListener("submit", onSubmitPhoneForm);

phoneInput.addEventListener("input", whenPhoneValueChanges);

fakeButton.addEventListener("click", fakeSubmit);

function fakeSubmit(event) {
  console.log("Fake submitting right now!!!");
  //   phoneForm.submit(); // doesnt trigger the submit listener
  phoneForm.requestSubmit(); // this is much more common
}

function whenPhoneValueChanges(event) {
  console.log("Phone value has changed!");
}

function onSubmitPhoneForm(event) {
  event.preventDefault();
  console.log("There is onSubmitPhoneForm!", phoneInput.value);
  //   console.log(document.forms.phoneForm.elements[0]);
  //   console.log(document.forms.phoneForm.elements.phone);

  //   console.log(phoneForm.elements.happy.checked);
  //   console.log(phoneForm.elements.numbers.options);

  phoneForm.reset(); // this is a good pratice
}
