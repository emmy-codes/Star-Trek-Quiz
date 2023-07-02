// array of quiz objects containing a question, 4 answers, and a property telling if the answer is true or not

let quiz = [
  {
    questionText: "What is Baby Yoda's real name?",
    answers: [
      {
        answerText: "The Foundling",
        isTrue: false,
      },
      {
        answerText: "Grogu",
        isTrue: true,
      },
      {
        answerText: "Yodito",
        isTrue: false,
      },
      {
        answerText: "Mini-Me",
        isTrue: false,
      },
    ],
  },
  {
    questionText: "What is Mando's real name from The Mandalorian?",
    answers: [
      {
        answerText: "Boba Fett",
        isTrue: false,
      },
      {
        answerText: "Han Solo",
        isTrue: false,
      },
      {
        answerText: "Din Djarin",
        isTrue: true,
      },
      {
        answerText: "Joel",
        isTrue: false,
      },
    ],
  },
  {
    questionText: "Han Solo was frozen in what?",
    answers: [
      {
        answerText: "Time",
        isTrue: false,
      },
      {
        answerText: "Carbonite",
        isTrue: true,
      },
      {
        answerText: "Jelly",
        isTrue: false,
      },
      {
        answerText: "A Galaxy Far, Far Away",
        isTrue: false,
      },
    ],
  },
  {
    questionText: "Finish this quote from The Mandalorian: 'This is the ___'",
    answers: [
      {
        answerText: "end",
        isTrue: false,
      },
      {
        answerText: "story",
        isTrue: false,
      },
      {
        answerText: "mando",
        isTrue: false,
      },
      {
        answerText: "way",
        isTrue: true,
      },
    ],
  },
  {
    questionText: "Lightsabers are powered by what type of crystal?",
    answers: [
      {
        answerText: "Kyber crystal",
        isTrue: true,
      },
      {
        answerText: "Light crystal",
        isTrue: false,
      },
      {
        answerText: "Quartz Crystal",
        isTrue: false,
      },
      {
        answerText: "Diamond",
        isTrue: false,
      },
    ],
  },
  {
    questionText: "Who is Darth Vader's grandson?",
    answers: [
      {
        answerText: "Obi-Wan Kenobi",
        isTrue: false,
      },
      {
        answerText: "Han Solo",
        isTrue: false,
      },
      {
        answerText: "Luke Skywalker",
        isTrue: false,
      },
      {
        answerText: "Kylo Ren",
        isTrue: true,
      },
    ],
  },
  {
    questionText: "What episode is The Phantom Menace?",
    answers: [
      {
        answerText: "I",
        isTrue: true,
      },
      {
        answerText: "III",
        isTrue: false,
      },
      {
        answerText: "VI",
        isTrue: false,
      },
      {
        answerText: "VII",
        isTrue: false,
      },
    ],
  },
  {
    questionText: "Where is Jabba the Hutt's Palace located?",
    answers: [
      {
        answerText: "Alderaan",
        isTrue: false,
      },
      {
        answerText: "Endor",
        isTrue: false,
      },
      {
        answerText: "Coruscant",
        isTrue: false,
      },
      {
        answerText: "Tatooine",
        isTrue: true,
      },
    ],
  },
  {
    questionText:
      "According to Luke, confronting what is the destiny of a Jedi?",
    answers: [
      {
        answerText: "Their Fear of Heights",
        isTrue: false,
      },
      {
        answerText: "The Dark Side of the Coffee",
        isTrue: false,
      },
      {
        answerText: "Public Speaking",
        isTrue: false,
      },
      {
        answerText: "Fear",
        isTrue: true,
      },
    ],
  },
  {
    questionText: "Bo-Katan wanted what from Moff Gideon in The Mandalorian?",
    answers: [
      {
        answerText: "A Pair of Mandalorian Boots",
        isTrue: false,
      },
      {
        answerText: "The Darksaber",
        isTrue: true,
      },
      {
        answerText: "Gideon's Secret Chicken Recipe",
        isTrue: false,
      },
      {
        answerText: "The Map to Luke Skywalker's location",
        isTrue: false,
      },
    ],
  },
];

// quizIndex stores the updated quiz index from inside the function so it isn't lost
let quizIndex = 0;
let currentScore = 0;

// keeping score of the user
// to keep track of the users score as they play
let scoreTally = `<div class="score-wrapper">
        <p class="score-title">Score:</p>
        <p class="score-tally">${currentScore}</p>
        <p class="of-10">/10.</p>
       </div>`;

// targets the element with the class of main-content
let mainContentElement = document.querySelector(".main-content");

// showQuizQuestions function to show the current main text content
let showQuizQuestions = () => {
  // currentQuestionObject is our new source of truth for quiz question index
  let currentQuestionObject = quiz[quizIndex];

  // once the currentQuestionObject reaches the end of the array it will return undefined, this if statement utilises that attribute to end the game
  if (currentQuestionObject === undefined) {
    // resetting the quizIndex so the player can restart the game
    quizIndex = 0;

    // add congratulatory message
    let congratulationsParagraph = `<p>Well done for completing the quiz! Your score is shown below.</p>`;

    // add restart game button that runs the function over from the beginning thanks to the resetting of quizIndex above
    let restartButton = `<button class="buttons" onclick="showQuizQuestions()">Restart game</button>`;

    // appends the p and button tags to the page
    mainContentElement.innerHTML = congratulationsParagraph + restartButton;
  }

  // shows the paragraph tag with main-text class, adds the question text from my array at the current index stored in currentQuestionObject
  let questionTextElement = `<p class="main-text">${currentQuestionObject.questionText}</p>`;

  // creates an answerButtons variable with an empty string
  let answerButtons = "";

  // variable tracking the iteration of the answers connected to the currentQuestionObject
  let answersArray = currentQuestionObject.answers;

  // creates answers buttons for each answer, runs until all answerText have been appended to a button and sent to the answerButtons list
  for (let answerIndex = 0; answerIndex < answersArray.length; answerIndex++) {
    // new source of truth for currentQuestionObject => answersArray based on the answerIndex
    let currentAnswer = answersArray[answerIndex];

    // takes the text from the answerText in the currentAnswer object and creates a button
    let button = `<button class="buttons" onclick="updateScore()">${currentAnswer.answerText}</button>`;

    // appends the answerText button one at a time to the answerButtons list
    answerButtons += button;
  }

  // appends the created p tag in questionTextElement, and the answer buttons stored in the answerButtons list
  mainContentElement.innerHTML =
    questionTextElement + answerButtons + scoreTally;

  // quizIndex++ adds 1 to the quizIndex much like a for loop, so that the next index shows when a button is clicked
  quizIndex++;
};

// updates the score by 1 when the correct answer button is clicked
let answerClicked = quiz[0].answers[1];
let updateScore = () => {
  let scoreBoard = document.querySelector(".score-tally");
  // step 1: check if answerText has true on the isTrue property
  if (answerClicked.isTrue) {
    // update score variable
    currentScore++;
    // update the dom with the updated variable value
    scoreBoard.innerHTML = currentScore;
  }
};

// quizIterator targets the element with the class name start-game
let quizIterator = document.querySelector(".start-game");

// event listener is listening for click event to run the showQuizQuestions function
quizIterator.addEventListener("click", showQuizQuestions);
