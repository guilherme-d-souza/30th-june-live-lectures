const emailInput = document.getElementById("email");

emailInput.addEventListener("input", validateEmail);

function validateEmail(event) {
  // checking if the email is from tripleten
  const emailValue = emailInput.value;
  const errorEmail = document.getElementById("email-error-message");

  if (emailValue.includes("@tripleten")) {
    // CLEAN UP
    errorEmail.textContent = ""; // doesn't have any errors
    emailInput.classList.remove("input-error");
    M;
    console.log("Good to go! Valid e-mail!");
  } else {
    // SET ERRORS
    errorEmail.textContent =
      "Your e-mail isn't valid. Needs to be a tripleten email";
    emailInput.classList.add("input-error");
  }
}
