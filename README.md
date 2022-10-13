# JavaScript30-02-Clock
 This is a 30 day JavaScript Challenge. Challenge #2 JS and CSS Clock
 
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![Project Screenshot](/Screenshot.png)


### Links

- Solution URL: [https://github.com/kryde507/JavaScript30-02-Clock](https://github.com/kryde507/JavaScript30-02-Clock)

## My process

### Built with

- Vanilla JavaScript
- CSS

### What I learned

In this project I learned about I learned about using date() in JavaScript. Originally I thought the excersise was to update the time lapsed since opening the webpage but then realized I needed to access the current time. 


The following JavaScript snippet is used to set the current time in seconds and rotate the second hand:
```js
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    let s = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${s}deg)`;
```


### Continued development

I would like to learn more of the functionality of JavaScript that I am unaware of - before this challenege I was unaware of the date() object. 

### Useful resources

- [MDN Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - This helped me understand the date object.

## Author

- GitHub - [KRyde507](https://github.com/kryde507)

