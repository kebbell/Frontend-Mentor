"use strict";

const card = document.querySelector(".card");
const nameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#card-number");
const expMonthInput = document.querySelector("#exp-month");
const expYearInput = document.querySelector("#exp-year");
const cvcInput = document.querySelector("#cvc");
const confirmButton = document.querySelector("button[type='submit']");
const completedState = document.querySelector(".completed-state");
const continueButton = completedState.querySelector("button[type='button']");
const inputs = document.querySelectorAll(".exp-date-field, #card-number, #name, #cvc");

function checkInputsFilled() {
  return Array.from(inputs).every((input) => input.value.trim() !== "");
}

function addSpaceToCardNumber(input) {
  const value = input.value.replace(/\s/g, "");
  const parts = value.match(/\d{1,4}/g);
  if (parts) {
    input.value = parts.join(" ");
    input.selectionStart = input.selectionEnd = input.value.length;
  }
}

function handleConfirmButtonClick() {
  if (checkInputsFilled()) {
    card.style.display = "none";
    completedState.style.display = "block";
  } else {
    alert("Please fill in all the input fields.");
  }
}

confirmButton.addEventListener("click", handleConfirmButtonClick);

cardNumberInput.addEventListener("input", () => addSpaceToCardNumber(cardNumberInput));

continueButton.addEventListener("click", () => {
  card.style.display = "block"; // Ensure card is shown by setting display to block
  completedState.style.display = "none"; // Hide the completed state
  inputs.forEach((input) => input.value = ""); // Clear the input fields
});


