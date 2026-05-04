// ── Step 1: Find our HTML elements ──

const submitDiv = document.querySelector('.submit');
/*
  submitDiv references the pill container div.
  We still need this to add/remove the error class
  that turns the border red.
*/

const submitBtn = document.querySelector('.submit button');
/*
  This finds the button INSIDE .submit.
  querySelector('.submit button') means:
  "find a <button> that lives inside .submit"
  This is a descendant selector — same concept
 learned in CSS applied to JavaScript.
*/

const emailInput = document.getElementById('email');
/*
  getElementById is slightly faster than querySelector
  for finding elements by their id attribute.
  Finds our <input id="email"> element.
*/

const errorIcon = document.querySelector('.error-icon');
/*
  Finds our error icon image — currently hidden.
*/

const errorMessage = document.querySelector('.error-message');
/*
  Finds our "Please provide a valid email" span — currently hidden.
*/


// ── Step 2: Listen for the button click ──

submitBtn.addEventListener('click', function(event) {
/*
  'click' fires when the button is physically clicked.
  This works on ANY element — not just form elements.
  Since our button is inside a div (not a form),
  'click' is the correct event here.
*/

  event.preventDefault();
  /*
    By default, submitting a form REFRESHES the page —
    wiping everything out before we can show error messages.
    preventDefault() stops that default behaviour.
    "Prevent the default action from happening."
  */

    // ── Clear previous error state first ──
  submitDiv.classList.remove('error');
  errorIcon.style.display = 'none';
  errorMessage.style.display = 'none';
  /*
    We reset ALL error states at the START of every click.
    Why? Because the user may have fixed their email and
    clicked again.
    Without this reset, old error styling can linger
    even when the new input is perfectly valid.
  */

  const emailValue = emailInput.value.trim();
  /*
    .value reads whatever the user typed into the input.
    .trim() removes any accidental spaces from the
    start or end of what they typed.
    "   hello@email.com   " becomes "hello@email.com"
  */

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  /*
     A pattern for checking text.
    It checks if the email has the shape: something@something.something
  */

  const isValid = emailPattern.test(emailValue);
  /*
    .test() checks if emailValue matches our pattern.
    Returns true (valid email) or false (invalid email).
  */


  // ── Step 3: Show or hide the error based on the result ──

  if (!isValid) {
  /*
    if (!isValid) means: "if NOT valid" — so this block
    runs when the email is WRONG or EMPTY.
  */

    submitDiv.classList.add('error');
    /*
  submitDiv is our reference to the pill container.
  We add/remove 'error' class on the div — not the button.
  The CSS rule .submit.error turns the border red.
*/

    errorIcon.style.display = 'flex';
   /*
  The error icon sits inside .submit which is a flex container.
  Setting it to flex keeps it properly aligned alongside
  the input and button inside the pill by the side as the default position is row.
  display: block would work but may cause alignment issues.
*/

    errorMessage.style.display = 'block';
    /*
      Same — makes the error message text visible.
    */

  } else {
  /*
    This block runs when the email IS valid.
    We clear all the error states.
  */

    submitDiv.classList.remove('error');
    /*
      Removes the "error" class — border goes back to pink.
    */

    errorIcon.style.display = 'none';
    /*
      Hides the error icon again.
    */

    errorMessage.style.display = 'none';
    /*
      Hides the error message again.
    */

    setTimeout(function() {
      alert('Thank you! You will be notified at launch.');
      /*
        setTimeout delays the alert by 10 milliseconds.
        This tiny pause gives the browser just enough time
        to repaint the screen — clearing the error states
        visually — BEFORE the alert box appears and
        freezes everything.
        
        setTimeout takes two things:
        1. A function to run (the alert)
        2. How long to wait in milliseconds (10ms)
      */
    }, 10);

  }
    
});