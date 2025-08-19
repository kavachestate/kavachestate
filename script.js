// Function to scroll to the contact form section
function scrollToContact() {
    const contactSection = document.getElementById('contact-form-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formMessage = document.getElementById('form-message');
    
    // In a real project, you would send this data to a server.
    // For this simple landing page, we will just show a success message.
    
    // Simulate form submission success
    formMessage.textContent = 'आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।';
    formMessage.style.color = '#28a745';
    
    // Reset the form after a short delay
    setTimeout(() => {
        document.getElementById('contact-form').reset();
        formMessage.textContent = '';
    }, 3000);
});
