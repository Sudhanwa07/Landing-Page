// Alert on CTA button click
document.getElementById('cta-button').addEventListener('click', () => {
  alert('Thank you for your interest!');
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent page refresh
  alert('Thanks for submitting your email!');
  this.reset();  // Clear form
});
