# Frontend Mentor - Intro component with sign up form solution

This is my solution to the Frontend Mentor Intro component with sign up form challenge. This project helped me improve my understanding of responsive layouts, form validation, DOM manipulation, and JavaScript interaction with CSS classes.

## Table of contents

- [Frontend Mentor - Intro component with sign up form solution](#frontend-mentor---intro-component-with-sign-up-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Challenges I faced](#challenges-i-faced)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
  
---
## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on screen size
- See hover states for interactive elements
- Receive validation errors when:
  - Input fields are empty
  - Email format is invalid

---

## Screenshot

![Project Screenshot](./preview.jpg)

---

## Links

- Live Site URL: [(https://emmanuella-ogbu.github.io/Frontend-Mentor-Challenges/intro-compoment-with-signupform/)]
- Solution URL: [https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-CZXe_aEd0m]

---

## My process

### Built with

- Semantic HTML5
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- DOM manipulation
- Form validation logic

---

## What I learned

This project helped me better understand how JavaScript interacts with HTML and CSS.

Some important concepts I learned include:

- Using `querySelector()` and `getElementById()`
- Using `addEventListener()` for form submission
- Preventing default browser form behavior using `preventDefault()`
- Validating form inputs using reusable functions
- Using `.closest()` to target wrapper containers dynamically
- Using `classList.add()` and `classList.remove()` to trigger CSS states
- Basic email validation using regular expressions (Regex)
- Accessibility improvements using visually hidden labels (`sr-only`)

Example of validation logic I learned:

```css 
.input-wrapper {
    position: relative;
}
input:focus {
    outline: none;
    border-color: hsl(248, 32%, 49%);
}
input.error {
    border-color: red; 
}
.error-icon {
    display: none;
    position: absolute;
    right: 1rem;
    transform: translateY(-50%);
    top: 50%;
}
.sr-only {
    position: absolute;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

```js
function validate(input) {

    const inputGroup = input.closest('.input-group')

    if(input.value.trim() === '') {

        inputGroup.classList.add('show-error')

        return false

    } else {

        inputGroup.classList.remove('show-error')

        return true
    }
}
```

I also learned the relationship between JavaScript and CSS states:

```css
.input-group.show-error input {
    border-color: red;
}
```

JavaScript adds the `show-error` class dynamically, and CSS reacts visually.

---

## Challenges I faced

One of my biggest challenges was understanding how JavaScript connects different concepts together at once, especially:

- DOM selection
- event listeners
- functions
- validation
- CSS class manipulation

I initially struggled with understanding why `.closest()` was needed and why validation logic should target wrapper containers instead of individual inputs directly.

Through repeated practice and debugging, I began understanding how JavaScript controls UI states dynamically.

---

## Continued development

I want to continue improving in:

- JavaScript logic building
- Form validation
- DOM traversal
- Accessibility
- Responsive layouts
- Building interactive frontend applications without tutorials

---

## Useful resources

- [JavaScript.info](https://javascript.info/)  
  Helped me understand DOM manipulation, events, validation, and browser behavior.

- [MDN Web Docs](https://developer.mozilla.org/)  
  Useful for understanding specific methods and CSS behavior.

- [Claude](https://claude.ai/)  
  Assisted me in understanding JavaScript logic and debugging concepts.

- ChatGPT  
  Helped me understand JavaScript concepts, DOM traversal, validation logic, and accessibility.

---

## Author

- Frontend Mentor - [@Emmanuella-Ogbu](https://www.frontendmentor.io/profile/Emmanuella-Ogbu)
- GitHub - https://github.com/Emmanuella-Ogbu
---

## Acknowledgments

Special thanks to the JavaScript.info documentation, MDN Web Docs, Claude, and ChatGPT for helping me understand frontend development concepts more deeply while building this project.