// Get the <form> element from the HTML using its id="contact-form"
const form = document.getElementById('contact-form');

// Get the success toast notification element (hidden by default in CSS)
const toast = document.getElementById('success-toast');

// Listen for the "submit" event on the form (when user clicks submit button)
form.addEventListener('submit', (e) => {
 
 // Prevent the browser's default form submission (page reload)
  e.preventDefault(); // Allowing JavaScript to validate code first, stops browser from reloading page and sending form to server immediately.
  
  clearAllErrors(); // Clear any previous error messages and styles

  let isValid = true; // Assume the form is valid at first

  // ===== First Name Validation ======
 
  // Get the value of the first-name input, remove spaces, and check if empty
  if (!document.getElementById('first-name').value.trim()) {
    
    // Show an error message for the first-name field if empty
    showError('first-name', 'This field is required');
    
    // Mark the form as invalid
    isValid = false;
  }

  // ===== Last Name Validation =====
  if (!document.getElementById('last-name').value.trim()) {
    showError('last-name', 'This field is required');
    isValid = false;
  }

  // ==== Email Validation =====
  
  // Check if email field is empty
  const email = document.getElementById('email').value.trim();
  
  // If empty, show error message
  if (!email) {
    showError('email', 'This field is required');
    isValid = false;
  } 
  // Check if email format is invalid using a Regular Expression (RegEx)
  
   // If pattern does not match, show invalid email message
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }

  // ===== Query Type (Radio Buttons) Validation =====

  // Check if ANY radio button with name="query-type" is selected
  if (!document.querySelector('input[name="query-type"]:checked')) {
    
    // Get the element where the error message should appear
    const err = document.getElementById('query-error');
    
    // Set the error message text
    err.textContent = 'Please select a query type';
    
    // Mark the error visible (CSS dispaly: block)
    err.style.display = 'block';

    // Mark form as invalid
    isValid = false;
  }

  //===== Message Validation ======

  // Check if textarea message is empty
  if (!document.getElementById('message').value.trim()) {

    // If empty show error message and make the form invalid
    showError('message', 'This field is required');
    isValid = false;
  }

  // ====== Consent Checkbox ======
  
  // Check if the consent checkbox is NOT checked, if not
  if (!document.getElementById('consent').checked) {

    // Get consent error message container
    const err = document.getElementById('consent-error');

    // Display consent error message
    err.textContent = 'To submit this form, please consent to being contacted';

    // Make it visible using CSS
    err.style.display = 'block';

    // Make the form invalid
    isValid = false;
  }

  // ===== Success Case Popup =====

   // Only runs if ALL validations passes
   if (isValid) {

    // Reset form field to empty
    form.reset();

    // Show success toast by adding CSS class "show"
    toast.classList.add('show');

    // Hide toast after 5 seconds (5000 miliseconds)
    setTimeout(() => toast.classList.remove('show'), 5000);
  }
});


// ==== FUNCTION: Show error message for a specific field
function showError(id, message) {
  
  // Find the error element associated with this field
  // Example: "first-name" → "first-name-error"
  const errorEl = document.getElementById(id + '-error');

   // Set the error text
  errorEl.textContent = message;
  
  
  // Make the error visible
  errorEl.style.display = 'block';

  // Add "error" class to the input's parent container
  // This triggers CSS styles like red borders
  document.getElementById(id).parentElement.classList.add('error'); // for inputs
}


// ==== FUNCTION: Remove all error messages and styles ===== 
function clearAllErrors() {
  
  // Select ALL elements with class "error-message"
  document.querySelectorAll('.error-message').forEach(el => {
    
        // Hide each error message
    el.style.display = 'none';
    
       // Remove any existing text
    el.textContent = '';
  });

  // Remove the "error" class from input containers
  document.querySelectorAll('.input-group, .consent-group').forEach(el => el.classList.remove('error'));
}