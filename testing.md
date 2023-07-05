## CONTENTS

* [Automated Testing](#automated-testing)
* [Lighthouse Performance Score](#lighthouse-performance-score)
  * [W3C Validator](#w3c-validator)
  * [JS Validator](#js-validator)

* [Manual Testing](#manual-testing)
  * [Complete Testing Runthrough](#complete-testing-rundown)
  * [Interactive Page Features](#interactive-page-features)



## Automated Testing

### Lighthouse Performance Score

### W3C Validator

[HTML checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Femmy-codes.github.io%2FStar-Wars-Quiz%2F) ![htmlchecker star wars quiz](https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/3f6766bf-8a1c-4664-87be-d79421028e2f) - Was informed of one error stating "Stray start tag Footer" I realised I had put the footer outside the body and moved it inside to fix it. 7 info messages about the self closing tags having a forward slash in them, but this is added automatically by my Prettier VSCode extension.



[CSS checker](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femmy-codes.github.io%2FStar-Wars-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) ![css validator star wars quiz](https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/a34e0a94-0b02-4b65-93fa-72d7b17d19ef) - No errors found. 

### JS Validator

[script.js]()

## Manual Testing

### Complete Testing Runthrough

Devices tested: Android flip Z3. Google Pixel, IPhone

#### Interactive page features

| Feature  | Expectation | Testing | Result |
| -------- | :---------: | :-----: | -----: |
| Info button | Clicking the button shows a modal with information about the quiz | Clicked button | Info correctly shows
| Modal close | Clicking outside the modal or on the X closes the window | Clicked both outside the box and on the X | Window correctly closes
| Start game button | Clicking the button starts the game by showing the first question, as well as the score starting 0/10. | Clicked button | First question and score showing correctly
| Answer buttons | Clicking any button leads you to the next question | Clicked all buttons | ALl buttons lead to the next question
| Restart game button | Clicking restart game button takes you back to the first question again | Clicked button | Correctly returned to the first question
| Button hover | When mousing over a button it should change to a lighter colour | Hovered over each button from start page to restart quiz page | All buttons correctly highlighting
| Score update | When the user selects the correct answer, the score is updated. If they select an incorrect answer, the score stays the same. | Clicked all correct and incorrect answers | Score correctly adjusts when the right answer is chosen, and stays the same on the wrong ones

#### Visual features

| Visual aspect  | Expectation | Testing | Result |
| -------------- | :---------: | :-----: | -----: |

