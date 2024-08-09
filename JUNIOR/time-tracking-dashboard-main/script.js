'USE STRICT'


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

