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
    let button = `<button class="options" onclick="showQuizQuestions()">${currentAnswer.answerText}</button>`;

    // appends all answers created from the currentAnswer object
    answersButton += button;
  }

  mainContentElement.innerHTML = template + answersButton;

  // quizIndex++ adds 1 to the quizIndex much like a for loop, so that the next index shows when a button is clicked
  quizIndex++;
};

let startGame = document.querySelector(".start-game");
startGame.addEventListener("click", showQuizQuestions);