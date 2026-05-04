# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned/challenge](#what-i-learnedchallenge)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Preview of designed work](./design/designed-preview.jpg)

### Links

- Solution URL: [GitHub](https://github.com/emmanuella-ogbu/Frontend-Mentor-Challenges/product-preview-card)
- Live Site URL: (GitHub Pages) [https://emmanuella-ogbu.github.io/Frontend-Mentor-Challenges/product-preview-card/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Media Query
- Google Fonts

### What I learned/challenge

My major challenge was the placement of the product card on the left and text on the right as shown below:

```
┌─────────────┬─────────────────────┐
│             │  PERFUME            │
│   IMAGE     │  Gabrielle Essence  │
│             │  $149.99  ~~$169~~  │
│             │  [Add to Cart]      │
└─────────────┴─────────────────────┘
```

I tried using Flexbox, the image and text became side by side though the text on the right was not stacking below each other but side by side. I tried fixing it but nothing seems to work until i did to try out Grid and i realised that despite Flexbok and Grid are layout tool, they are used for different purpose. 
  Flexbox works in one direction at a time whereas Grid (Rows or Columns) works in two directions at the same time (Rows and Columns) and boom everything fall into place. As Grid allows the card (image on the left), text on the right, as it needs two columns at the same time to work which is 2 direction.

Here is what i did differently, replacing the outer Flexbox with Grid:

```css
.product-card {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    max-width: 600px; 
    width: 100%; 
    overflow: hidden;
}
```

`grid-template-columns: 1fr 1fr` meant: two equal columns where the image takes the left side and the text took the right side.

I also added `overflow: hidden` - which clips the image to the card's rounded corners as the image corners will stick out past its border radius.

Then i fixed the text column using Flexbox with gap across the text instead of ndividual margins:

```css
.product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 28px 24px;
    gap: 14px;
}
```
`gap: 14px` : I did not know that this adds the equal space between its elements which is more structure and friendly to work with them adding `margin-bottom` to every single element. Absolutely amazing!!

### Continued development

I look forward to creating hover and focus states for each interactive elements and using Javascript to achieve the same result thus making the code used less and making the website more interactive.
As well as learning more about Grid and Flexbox by playing the game "flexboxfroggy" and "cssgridgarden" and practising with the lessons learnt

### Useful resources

- [Google Fonts](googlefonts.com) - This helped me to get the needed fonts used to achieved to desired design.

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- I made use of Claude 
- It helped me in understanding the differnce between CSS Grid and CSS Flexbox and how they are used as layout tool for website development.
- I got to understand from it where Grid should be used (for rows and columns at the same time) and Flexbox (which uses rows or columns individually).

## Author
Ogbu, Emmanuella Kosisochukwu

- Linkedln - [Emmanuella Ogbu](
www.linkedin.com/in/ellaogbu455)
- Frontend Mentor - [@emma-401](https://www.frontendmentor.io/profile/emma-401)
- Github - [@emma-401](https://github.com/emma-401)
