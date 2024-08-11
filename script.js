// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {

    // Alert Welcome Message
    alert('Welcome to the Job Listing Portal!');

    // Simple Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');

        if (name && name.value.trim() === '') {
            alert('Please enter your name.');
            event.preventDefault(); // Prevents form submission
        } else if (email && email.value.trim() === '') {
            alert('Please enter your email.');
            event.preventDefault();
        }
    });
    
    //Handle Menu Toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});


    // Change Background Color on Button Hover
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#ffcc00'; // Yellow on hover
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#1e90ff'; // Blue when not hovered
        });
    });

});
