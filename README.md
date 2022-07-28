# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot
First look of the page

![](./intro1.png)

Second look after being submit with empty field. 

![](./intro2.png)

### Links

- Solution URL: (https://github.com/Mlowegene/Intro-component-with-sign-up-form)
- Live Site URL: (https://mlowegene.github.io/Intro-component-with-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

I have learned to make validation using javascript...

```js
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstName = fname.value.trim();
    let lastName = lname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (firstName === "") {
        errorFunction(fname, 'First Name cannot be empty');
    }else {
        successFunction(fname);
    }

    if (lastName === "") {
        errorFunction(lname, 'Last Name cannot be empty');
    }else {
        successFunction(lname);
    }

    if (emailValue === "") {
        errorFunction(email, 'Email cannot be empty');
    }else if(!emailValue.match(pattern)){
        errorFunction(email, 'Looks like not an email');
    }else {
        successFunction(email);
    }

    if (passwordValue === "") {
        errorFunction(password, 'Password cannot be empty');
    }else {
        successFunction(password);
    }
})
```

### Useful resources

- [Resource](https://www.w3schools.com/js/default.asp) - This helped me for understanding some basic of javascript. I really liked this pattern and will use it going forward.

## Author

- Website - [Mlowegene](https://github.com/Mlowegene)
- Frontend Mentor - [@Mlowegene](https://www.frontendmentor.io/profile/Mlowegene)
- Twitter - [@genemlowe](https://twitter.com/genemlowe)
