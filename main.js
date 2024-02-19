"use strict";

// elements
const btnClaim = document.querySelector(".btnClaim");
const inputFirstName = document.querySelector(".firstNameInput");
const inputLastName = document.querySelector(".lastNameInput");
const inputEmail = document.querySelector(".emailInput");
const password = document.querySelector(".passwordInput");
const errorMessage = document.querySelector(".error-message");
const invalidEmail = document.querySelector(".invalid-email");
const subscriptionDone = document.querySelector(".submission-completed");
const formElement = document.querySelector(".form");

inputFirstName.value = "";
inputLastName.value = "";
inputEmail.value = "";
password.value = "";

btnClaim.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputFirstName.value.length === 0 ||
    inputLastName.value.length === 0 ||
    inputEmail.value.length === 0 ||
    password.value.length === 0
  ) {
    errorMessage.style.display = "block";
  } else {
    formElement.style.display = "none";
    subscriptionDone.style.display = "block";
  }

  if (validateEmail(inputEmail.value)) {
    return true;
  } else {
    invalidEmail.style.display = "block";
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
