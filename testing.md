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

[index.html]()
[style.css]()

### JS Validator

[script.js]()

## Manual Testing

### Complete Testing Runthrough

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
