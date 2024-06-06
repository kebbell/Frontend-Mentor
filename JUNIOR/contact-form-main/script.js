// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

const form = document.querySelector("form");
const modal = document.getElementById("myModal");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.removeAttribute('required');
    }
  });
});

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    radioButtons.forEach(rb => {
      if (rb !== radioButton) {
        rb.checked = false;
      }
    });
  });
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    checkboxes.forEach(cb => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  // Check if all inputs are filled in
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      isFormValid = false;
    }
  });

  // Check if at least one radio button is checked
  let isRadioChecked = false;

  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      isRadioChecked = true;
    }
  });

  if (isFormValid && isRadioChecked) {
    modal.style.display = "block";
  } else {
    alert("Please fill in all inputs and select a query type");
  }
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let isFormValid = true;

  // Check if all inputs are filled in
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      isFormValid = false;
    }
  });

  // Check if at least one radio button is checked
  let isRadioChecked = false;

  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      isRadioChecked = true;
    }
  });

  if (isFormValid && isRadioChecked) {
    modal.style.display = "block";
  } else {
    alert("Please fill in all inputs and select a query type");
  }
});




// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* NEW */
