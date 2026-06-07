// STEP 1 - SELECT ELEMENTS
const form = document.getElementById('signup-form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const password = document.getElementById('password')
const email = document.getElementById('email')

// STEP 2 - Validate Empty Inputs
function validate(input) {  // DRY Principle: write logic once, use it many times.
    const inputGroup = input.closest('.input-group')

    if (input.value.trim() === '') {
        inputGroup.classList.add('show-error')
        return false
  } else {
        inputGroup.classList.remove('show-error')
        return true
    }
}

// STPE 3 - EMAIL VALIDATION
function validateEmail(input) {

    // Find THIS email input's wrapper
    const inputGroup = input.closest('.input-group')

     /*
      REGEX pattern for valid email format
    */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

     /*
      FAIL if:
      1. email is empty
      OR
      2. email format is invalid
    */
    if (input.value.trim() === '' ||
        !emailPattern.test(input.value)
     ) {
      inputGroup.classList.add('show-error')
      return false
  } else {
      inputGroup.classList.remove('show-error')
      return true
  }
}

  // STEP 4 - FORM SUBMIT EVENT

  form.addEventListener('submit', function(e) {
    // Stop page refresh
    e.preventDefault()

    // Run validations
    const firstNameValid = validate(firstName)
    const lastNameValid = validate (lastName)
    const passwordValid = validate(password)
    const emailValid = validateEmail(email)

     /*
      IF all are true
      form is valid
    */

      if(firstNameValid && lastNameValid && passwordValid && emailValid) {
        alert('Form submitted successfully!')
      }
  })