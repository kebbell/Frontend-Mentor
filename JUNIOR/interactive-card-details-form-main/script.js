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
const inputField = document.getElementById("input-field");
const inputs = document.querySelectorAll(".exp-date-field, #card-number, #name, #cvc");

// Function to check if all input fields are filled
function checkInputsFilled() {
  const inputs = document.querySelectorAll(".exp-date-field");
  return Array.from(inputs).every((input) => input.value.trim() !== "");
}

// Function to add a space after every 4 numbers in the card number input
function addSpaceToCardNumber(input) {
  const value = input.value.replace(/\s/g, "");
  const parts = value.match(/\d{1,4}/g);

  if (parts) {
    input.value = parts.join(" ");
    input.selectionStart = input.selectionEnd = input.value.length;
  }
}

// Function to handle confirm button click
function handleConfirmButtonClick() {
  if (checkInputsFilled()) {
    card.style.display = "none";
    completedState.style.display = "block";
  } else {
    alert("Please fill in all the input fields.");
  }
}

// Add event listener to the confirm button
confirmButton.addEventListener("click", handleConfirmButtonClick);

// Add event listener to the card number input
cardNumberInput.addEventListener("input", () => {
  addSpaceToCardNumber(cardNumberInput);
});
// Add event listener to the continue button
continueButton.addEventListener("click", function () {
  // Hide the completed state
  completedState.style.display = "none";
  card.style.display = "";
  // Clear the input fields
  inputs.forEach((input) => (input.value = ""));
});

