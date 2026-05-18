// -------- Step 1: Select Elements ---------------
const billInput = document.getElementById('total-bill')
const tipButtons = document.querySelectorAll('.dark-shade')
const customNumber = document.getElementById('custom-number')
const totalPeople = document.getElementById('total-people')
const tipResult = document.getElementById('tip-result')
const totalResult = document.getElementById('total-result')
const peopleError = document.getElementById ('people-error')
const resetButton = document.getElementById('reset-btn')

const errorWrapper = document.querySelector('#total-people').closest('.input-image') // Find its nearest matching parent- the visual component container that belongs to the people input. This is to add/remove the error border class

// ── Step 2: State variable ───────────────────────────────
let selectedTip = 0
/*
  Tracks which tip percentage is currently active.
  Starts at 0 — no tip selected yet.
  Updates when a button is clicked OR custom input is used.
  The calculate function reads this variable.
*/

// ---------Step 3: Tip Button Click -----------
tipButtons.forEach(function(button) {
    // "button" = each individual button, one at a time
    // forEach = for each of the buttons individually, one by one
    // This runs once for every button in the NodeList (tipButtons)
    // This is how listener is added to the all five buttons, looped through each one and attached individually
    button.addEventListener('click', function() {
    // For every button, attach a listener (click)

        tipButtons.forEach(function(btn) // Visit every button again 
        {
            btn.classList.remove('active') // Removes highlights from every button 
            btn.setAttribute('aria-pressed', 'false') /* because aria-pressed="true" tells the screen readers that a particular button has been selected, hence it reset the accessibility state*/
        });
        this.classList.add('active') // add the active class
        this.setAttribute('aria-pressed', 'true') // pressed button shoud activate
        // 'this' means the clicked element that triggered the event and it is used inside event listener functions and only works in functions

        customNumber.value =''

        selectedTip = Number(this.dataset.tip) /* changes string "5" to a number and read the clicked button's data-tip value and store it in app memory*/

        calculate() /* Tip changed, hence recalculate immediately */

    });
});

/* ---- Step 4: Custom Input ---- */
customNumber.addEventListener('input', function() {

    tipButtons.forEach(function(btn) { // Observe as tipButtons above
    btn.classList.remove('active')
    btn.setAttribute('aria-pressed', 'false') // note: user switched to custom tip and other buttons should deactivate
});
    selectedTip = Number(customNumber.value) // Whatever user typed is now the selected tip

    calculate()
});

/* --- Step 5: Calculate Function */
function calculate() {
    const bill = Number(billInput.value)
    const people = Number(totalPeople.value)
    const tip = selectedTip

    if (!bill || !tip || !people || people === 0) return

    const tipPerPerson = (bill * tip / 100) / people

    const totalPerPerson = (bill / people) + tipPerPerson

    tipResult.textContent = '$' + tipPerPerson.toFixed(2)

    totalResult.textContent = '$' + totalPerPerson.toFixed(2)
}

/* --- Step 6: Live Input Listeners ------- */
billInput.addEventListener('input', function() {
    calculate()
});

totalPeople.addEventListener('input', function() {

    validate() // So that people might not be zero and it can detect as error if so before calculation

    calculate()
});

/* -------- Step 7: Validation Function --------- */
function validate() {

    const peopleValue = Number(totalPeople.value)

    if (peopleValue === 0 || totalPeople.value === '') {

        peopleError.style.display = 'block'

        errorWrapper.classList.add('error')

    } else {

        peopleError.style.display = 'none'

        errorWrapper.classList.remove('error')

    }

}

/* -----Step 8: Reset ------- */
resetButton.addEventListener('click', function() {

    billInput.value = ''
    totalPeople.value = ''
    customNumber.value = ''

    selectedTip = 0

    tipButtons.forEach(function(btn) {
        btn.classList.remove('active')
        btn.setAttribute('aria-pressed', 'false')
    });

    tipResult.textContent = '$0.00'
    totalResult.textContent = '$0.00'

    peopleError.style.display = 'none'

    errorWrapper.classList.remove('error')

});