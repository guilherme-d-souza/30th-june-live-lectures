const form = document.forms.exampleForm;

// form.addEventListener("submit", handleValidation);
form.addEventListener("input", handleValidation);

function handleValidation(event) {
  event.preventDefault();

  // checking if the email is from tripleten
  const emailValue = form.elements.email.value;
  const errorEmail = document.getElementById("email-error-message");
  const submitButton = document.getElementById("exampleForm-submit");

  if (emailValue.includes("@tripleten")) {
    // CLEAN UP
    errorEmail.textContent = ""; // doesn't have any errors
    submitButton.disabled = false;
    console.log("Good to go! Valid e-mail!");
  } else {
    // SET ERRORS
    errorEmail.textContent =
      "Your e-mail isn't valid. Needs to be a tripleten email";
    submitButton.disabled = true;
    // select the input email element
    // change the border color
  }
}
