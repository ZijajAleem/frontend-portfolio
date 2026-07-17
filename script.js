// Wait for the DOM to fully load before running any code
document.addEventListener('DOMContentLoaded', function () {

  // Grab references to the form and its fields
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Grab references to the error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  // Grab reference to the success message element
  const formSuccess = document.getElementById('formSuccess');

  // Simple regex to check for a valid basic email format (text@text.text)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Run validation every time the form is submitted
  form.addEventListener('submit', function (event) {
    // Stop the browser from submitting/reloading the page
    event.preventDefault();

    // Clear old error/success messages before checking again
    clearErrors();

    let isValid = true; // Assume the form is valid until proven otherwise

    // ----- Validate Name -----
    if (nameInput.value.trim() === '') {
      showError(nameInput, nameError, 'Please enter your name.');
      isValid = false;
    }

    // ----- Validate Email -----
    if (emailInput.value.trim() === '') {
      showError(emailInput, emailError, 'Please enter your email address.');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Please enter a valid email address.');
      isValid = false;
    }

    // ----- Validate Message -----
    if (messageInput.value.trim() === '') {
      showError(messageInput, messageError, 'Please enter your message.');
      isValid = false;
    }

    // If everything passed, show the success message
    if (isValid) {
      formSuccess.textContent = 'Your message has been sent successfully.';
      form.reset(); // Clear the form fields
    }
  });

  // Helper function: displays an error message and marks the field as invalid
  function showError(inputElement, errorElement, message) {
    errorElement.textContent = message;
    inputElement.classList.add('invalid');
  }

  // Helper function: clears all error and success messages
  function clearErrors() {
    // Clear error text
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Remove the invalid styling from all fields
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    messageInput.classList.remove('invalid');

    // Clear the success message
    formSuccess.textContent = '';
  }

});