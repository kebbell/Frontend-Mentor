(function() {
  var input = document.createElement('INPUT');
  input.type = 'text';
  input.required = true;
  input.addEventListener("input", function() {
    if (input.value !== "") {
      input.classList.remove("required");
    } else {
      input.classList.add("required");
    }
  });
  document.getElementById('form').appendChild(input);

  var radio = document.createElement('INPUT');
  radio.type = 'radio';
  radio.required = true;
  radio.addEventListener("input", function() {
    if (radio.checked) {
      radio.classList.remove("required");
    } else {
      radio.classList.add("required");
    }
  });
  document.getElementById('form').appendChild(radio);
})();




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the input fields
var name = document.forms["form"]["name"];
var email = document.forms["form"]["email"];
var message = document.forms["form"]["message"];
var radio = document.forms["form"]["rating"];

// Function to check if all inputs are filled in
function validateForm() {
  const isInputFilled = input => input.value !== "";
  const isRadioChecked = radio => radio.checked;

  return [name, email, message].every(isInputFilled) && isRadioChecked(radio);
}

// Add event listener to the button
btn.addEventListener("click", function() {
  if (validateForm()) {
    modal.style.display = "block";
  } 
});

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listener to the window
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

// Add event listener to the close button
var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", closeModal);


