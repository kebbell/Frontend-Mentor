const emailInput = document.querySelector("input[type='email']");
const submitButton = document.querySelector("#submitButton");

emailInput.addEventListener("input", () => {
  const isValidEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(emailInput.value);
  if (isValidEmail) {
    emailInput.style.backgroundColor = "var(--grey)";
    emailInput.style.borderColor = "var(--pale-blue)";
    submitButton.style.display = "block";
  } else {
    emailInput.style.backgroundColor = "red";
    emailInput.style.borderColor = "red";
    submitButton.style.display = "none";
  }
});