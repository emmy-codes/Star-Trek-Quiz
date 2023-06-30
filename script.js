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
        answerText: "Boba Fett.",
        isTrue: false,
      },
      {
        answerText: "Han Solo.",
        isTrue: false,
      },
      {
        answerText: "Din Djarin.",
        isTrue: true,
      },
      {
        answerText: "Joel",
        isTrue: false,
      },
    ],
  },
];


// quizIndex stores the updated quiz index from inside the function so it isn't lost
let quizIndex = 0;
let mainContentElement = document.querySelector(".main-content");

// showQuizQuestions function to show the current main text content
let showQuizQuestions = () => {
  // currentQuestionObject is our new source of truth for quiz question index
  let currentQuestionObject = quiz[quizIndex];

  // shows the paragraph tag with main-text class, adds the question text from my array at the current index stored in currentQuestionObject
  let template = `<p class="main-text">${currentQuestionObject.questionText}</p>`;

  // creates an answersButton variable with an empty string
  let answersButton = "";

  //
  let answersArray = currentQuestionObject.answers;
  for (let answerIndex = 0; answerIndex < answersArray.length; answerIndex++) {
    // new source of truth for quiz answer index
    let currentAnswer = answersArray[answerIndex];

    //
    let button = `<button class="options">${currentAnswer.answerText}</button>`;

    // appends all answers created from the currentAnswer object
    answersButton += button;
  }

  mainContentElement.innerHTML = template + answersButton;
};
