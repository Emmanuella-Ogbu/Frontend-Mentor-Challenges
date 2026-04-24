# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). 
  Frontend Mentor challenges help improve real-world coding skills by building practical and responsive projects.

## Table of contents

- [Frontend Mentor - Base Apparel coming soon page solution](#frontend-mentor---base-apparel-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [AI Collaboration](#ai-collaboration)
- [During this project, I used AI tools like Claude to:](#during-this-project-i-used-ai-tools-like-claude-to)
- [What worked well:](#what-worked-well)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Desktop View](./Preview.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript 

### What I learned

This project helped me deepen my understanding of both layout and form validation.

I learned how display: block affects inline elements like images and why it helps with layout control.
I practiced combining multiple background properties, such as gradients and images, into a single declaration.
I understood how to switch between mobile and desktop images using the <picture> element and responsive techniques.
I improved my use of Flexbox for positioning and saw the importance of properties like flex-shrink.
I implemented basic email validation using JavaScript and regular expressions.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.error-message {
  display: none;
  color: hsl(0, 93%, 68%);
  font-size: 0.8rem;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-left: 2rem;
}
.hero-image {
    grid-column: 2;
    grid-row: 1 / 4;
    overflow: hidden;
  }
  @media (min-width: 768px) {
  body {
    display: grid;
    grid-template-columns: 58% 42%;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    background:
      url('../images/bg-pattern-desktop.svg') left center / 58% 100% no-repeat,
      linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
  }
  }

```
```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

setTimeout(function() {
      alert('Thank you! You will be notified at launch.');
}, 10);
```

### Continued development

- Improve my form validation logic with better user feedback (e.g., real-time validation)
- Explore accessibility best practices for forms and inputs
- Write cleaner, more modular JavaScript code

### AI Collaboration

# During this project, I used AI tools like Claude to:

- Underatand why my image was breaking in the desktop size

# What worked well:

- Quick debugging support
- Clear explanations of concepts

- What I’m improving:

- Strengthening my problem-solving approach

## Author

- GitHub - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

- Thanks to the Frontend Mentor community for providing realistic challenges and inspiration. 
- Also, appreciation to online resources and mentors that helped clarify concepts during this project.
