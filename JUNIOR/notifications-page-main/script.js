"Use Strict"

const notContainer = document.querySelector('.not-container');
const notItem = document.querySelectorAll('.not-item');
const notCount = document.querySelectorAll('.not-count');

// Add red bullet point to top 3 items
const topThreeItems = document.querySelectorAll('.top-item');

topThreeItems.forEach(item => {
    const redDot = document.createElement('span');
    redDot.textContent = ' ●';
    redDot.style.color = 'red';
    redDot.style.display = 'inline';
    redDot.style.marginLeft = '500px';
    item.appendChild(redDot);
});

// Remove red dot on item click
topThreeItems.forEach(item => {
    item.addEventListener('click', () => {
        const redDot = item.querySelector('span');
        if (redDot) {
            redDot.remove();
        }
    });
});

// Remove all red dots on "Mark All as Read" button click
const markAllAsReadBtn = document.getElementById('mark-all-as-read');

markAllAsReadBtn.addEventListener('click', () => {
    topThreeItems.forEach(item => {
        const redDot = item.querySelector('span');
        if (redDot) {
            redDot.remove();
        }
    });
});