function createInput(type, required) {
  const input = document.createElement('input');
  input.type = type;
  input.required = required;
  input.addEventListener("input", function() {
    input.classList.toggle("required", input.value === "");
  });
  return input;
}

function validateForm() {
  const isInputFilled = input => input.value !== "";
  const isRadioChecked = radio => radio.checked;

  const inputs = [name, email, message];
  const radio = document.forms["form"]["rating"];

  return inputs.every(isInputFilled) && isRadioChecked(radio);
}

function openModal() {
  if (validateForm()) {
    modal.style.display = "block";
  }
}

function closeModal() {
  modal.style.display = "none";
}

function handleOutsideClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}

(function() {
  const form = document.getElementById('form');
  const name = createInput('text', true);
  const email = createInput('email', true);
  const message = createInput('text', true);
  const rating = createInput('radio', true);
  rating.name = 'rating';

  form.appendChild(name);
  form.appendChild(email);
  form.appendChild(message);
  form.appendChild(rating);
})();

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closeButton = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openModal);
window.addEventListener("click", handleOutsideClick);
closeButton.addEventListener("click", closeModal);

