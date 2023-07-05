## CONTENTS

* [Automated Testing](#automated-testing)
* [Lighthouse Performance Score](#lighthouse-performance-score)
  * [W3C Validator](#w3c-validator)
  * [JS Validator](#js-validator)

* [Manual Testing](#manual-testing)
  * [Complete Testing Runthrough](#complete-testing-runthrough)
  * [Interactive Page Features](#interactive-page-features)



## Automated Testing

### Lighthouse Performance Score

I made sure to run the tests in a guest window to avoid any of my personal plugins impacting my performance score. My first test pointed out that I didn't have a meta description tag, so I went back and added that. Then the results changed to the following:

![star wars quiz desktop lighthouse test](https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/036312cc-778b-44c3-a9ba-e1a14e9389cf) - Desktop results
![star wars quiz mobile lighthouse test](https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/6c3bf495-b9cb-435b-a57a-d5218605d19d) - Mobile results


### W3C Validator

[HTML checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Femmy-codes.github.io%2FStar-Wars-Quiz%2F) ![htmlchecker star wars quiz](https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/3f6766bf-8a1c-4664-87be-d79421028e2f) - Was informed of one error stating "Stray start tag Footer" I realised I had put the footer outside the body and moved it inside to fix it. 7 info messages about the self closing tags having a forward slash in them, but this is added automatically by my Prettier VSCode extension.

[CSS checker](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femmy-codes.github.io%2FStar-Wars-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) ![css validator star wars quiz](https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/a34e0a94-0b02-4b65-93fa-72d7b17d19ef) - No errors found. 

### JS Validator

[JSHint](https://jshint.com/) ![jshint star wars quiz](https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/aa16a395-b6d6-4a83-ad32-13a2c685bdad) - No errors found.

## Manual Testing

#### Complete Testing Runthrough

Devices tested: Android flip Z3. Google Pixel, iPhone

#### Interactive page features

| Feature  | Expectation | Testing | Result |
| -------- | :---------: | :-----: | -----: |
| Info button | Clicking the button shows a modal with information about the quiz | Clicked button | Info correctly shows
| Modal close | Clicking outside the modal or on the X closes the window | Clicked both outside the box and on the X | Window correctly closes |
| Start game button | Clicking the button starts the game by showing the first question, as well as the score starting 0/10. | Clicked button | First question and score showing correctly |
| Answer buttons | Clicking any button leads you to the next question | Clicked all buttons | ALl buttons lead to the next question |
| Restart game button | Clicking restart game button takes you back to the first question again | Clicked button | Correctly returned to the first question |
| Button hover | When mousing over a button it should change to a lighter colour | Hovered over each button from start page to restart quiz page | All buttons correctly highlighting |
| Score update | When the user selects the correct answer, the score is updated. If they select an incorrect answer, the score stays the same. | Clicked all correct and incorrect answers | Score correctly adjusts when the right answer is chosen, and stays the same on the wrong ones |
| Dekstop hover button | When hovering over the buttons, they change from dark to light green | Moused over each button on the quiz | All hover effects working correctly |
| Link in footer | Clicking link opens new tab window | Clicked link | Correctly opens |

#### Visual features

Manual snapshot testing:

| Visual aspect  | Expectation | Testing | Result |
| -------------- | :---------: | :-----: | -----: |
| Header | Adequately sized to identify it as the main heading | Check size of header on multiple devices/screen sizes | Increased size slightly, now adequately sized |
| Footer | Properly located at the bottom of the page, clear purpose | Checked visual on multiple devices/screen sizes | Looks good! |
| On screen text | See the info/quiz questions and answers, score and footer content | Look at main content window for the relevant information | All elements correctly showing |
| Link in footer | Link doesn't change colour when clicked | Clicked link | Stays same colour |

When having manual user testing from friends/family/classmates, I was made aware of what at first appeared to be a bug for iPhone users where the previous button that is pressed is sometimes still highlighted when going to the next page. (video kindly provided by Kera on Slack)

https://github.com/emmy-codes/Star-Wars-Quiz/assets/70635859/444fdaff-4171-457d-b6e7-7ac0eb4ce1fb

It's hard to tell on the video but it turns out that this is a known and intended behaviour on Safari, where single finger taps are handled as mouse events and thus Safari assumes the "pointer" is still hovering on the element until a new tap is made (thankyou Alita for [the link explaining this(with added link to Apple's own documentation on the subject)](https://stackoverflow.com/questions/47802530/a-click-in-ios-safari-triggers-a-hover-state-on-element-underneath-where-you-t/48189857#48189857)

This is caused due to my hover pseudo-class, and would require a lot of JavaScript to fix. I tried a quick fix by adding an active button class which would use the original colour, but was informed that this didn't fix the problem.

So while this is a visual issue, this should be an issue for every person that's used a hover class on their code, rather than a personal bug that only I have. Sometimes the answer isn't always more JavaScript, as the more code I write, the slower my application becomes, the more code there is to go through when debugging and with content updates. Rather than omitting the hover effect, I chose that the occasional visual issue was worth the visual effect of the hover.

Thus, I chose to remove the class from mobile devices entirely since it's not really a mobile effect anyway and removes confusion for IOS users.
