// Smooth scroll behavior for the nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Toggle visibility of writings
const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement.style.display === 'none' || targetElement.style.display === '') {
            targetElement.style.display = 'block';  // Show the content
            button.textContent = `Hide: ${button.textContent.split(":")[1]}`;  // Change button text
        } else {
            targetElement.style.display = 'none';  // Hide the content
            button.textContent = `Show: ${button.textContent.split(":")[1]}`;  // Change button text
        }
    });
});

// Optional: Handle the "Email Me" button click event
const emailButton = document.querySelector('.contact-btn');
emailButton.addEventListener('click', () => {
    window.location.href = 'mailto:saptarshimandalofficial666@gmail.com'; // Opens email client
});
