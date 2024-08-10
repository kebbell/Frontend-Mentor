'USE STRICT'

// Event Listener for the hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Event Listener for the close button
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
});

// Event Listener for the radio buttons
const radioButtons = document.querySelectorAll('input[name="stats-options"]');


radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedOption = document.querySelector('input[name="stats-options"]:checked').value;
        console.log(selectedOption);

        // Change the content of the section based on the selected option
        const sectionContent = document.querySelector('.section-content');
        if (selectedOption === 'daily') {
            sectionContent.innerHTML = '<h3>Daily Stats Content</h3>';
        } else if (selectedOption === 'weekly') {
            sectionContent.innerHTML = '<h3>Weekly Stats Content</h3>';
        } else if (selectedOption === 'monthly') {
            sectionContent.innerHTML = '<h3>Monthly Stats Content</h3>';
        }
    });
});

