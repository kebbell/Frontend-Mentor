"use strict";

// DOM elements
const card = document.querySelector(".card"); // Main card container
const imgClass = document.querySelector(".img-class"); // Image container
const leftCard = document.querySelector(".left-card"); // Left side of the card
const left = document.querySelector(".left"); // Left side content
const leftp = document.querySelector(".leftp"); // Credit card number
const leftpname = document.querySelector(".leftpname"); // Cardholder name
const leftpdate = document.querySelector(".leftpdate"); // Expiration date
const leftLogo = document.querySelector(".left-logo"); // Card logo
const rightCard = document.querySelector(".right-card"); // Right side of the card
const right = document.querySelector(".right"); // Right side content
const rightp = document.querySelector(".rightp"); // Card security code
const cardDetails = document.querySelector(".card-details"); // Card details container
const cardholderName = document.querySelector(".cardholder-name"); // Cardholder name input
const name = document.querySelector("#name"); // Cardholder name input field
const cardNumber = document.querySelector(".card-number"); // Credit card number container
const cardNumberInput = document.querySelector("#card-number"); // Credit card number input field
const expDateCvc = document.querySelector(".exp-date-cvc"); // Expiration date and CVC container
const expDate = document.querySelector(".exp-date"); // Expiration date container
const expMonth = document.querySelector("#exp-month"); // Expiration month input field
const expYear = document.querySelector("#exp-year"); // Expiration year input field
const cvc = document.querySelector(".cvc"); // CVC container
const cvcInput = document.querySelector("#cvc"); // CVC input field
const confirm = document.querySelector(".confirm"); // Confirm button container
const confirmButton = document.querySelector("button[type='submit']"); // Confirm button
const completedState = document.querySelector(".completed-state"); // Completed state container
const completedStateH2 = document.querySelector(".completed-state h2"); // Completed state heading
const completedStateP = document.querySelector(".completed-state p"); // Completed state description
const continueButton = document.querySelector(".completed-state button[type='button']"); // Continue button
const attribution = document.querySelector(".attribution"); // Attribution container

// Function to check if all input fields are filled
function checkInputsFilled() {
  const inputs = document.querySelectorAll(".exp-date-field");
  for (let input of inputs) {
    if (input.value.trim() === "") {
      return false;
    }
  }
  return true;
}

// Function to handle confirm button click
function handleConfirmButtonClick() {
  if (checkInputsFilled()) {
    cardDetails.style.display = "none";
    completedState.style.display = "block";
  } else {
    alert("Please fill in all the input fields.");
  }
}

// Function to add a space after every 4 numbers in the card number input
function addSpaceToCardNumber() {
  const cardNumberInput = document.querySelector("#card-number");

  cardNumberInput.addEventListener("input", function() {
    const value = cardNumberInput.value.replace(/\s/g, ""); // Remove any existing spaces
    const parts = value.match(/\d{1,4}/g); // Split the value into groups of 4 digits

    if (parts) {
      cardNumberInput.value = parts.join(" "); // Join the groups with a space
    } else {
      cardNumberInput.value = value;
    }

    const lastCharIndex = cardNumberInput.value.length - 1;
    cardNumberInput.setSelectionRange(lastCharIndex, lastCharIndex); // Move the cursor to the end
  });
}

// Call the function to add the space after every 4 numbers
addSpaceToCardNumber();

// Add event listener to the confirm button
confirmButton.addEventListener("click", handleConfirmButtonClick);

