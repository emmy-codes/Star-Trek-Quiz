let quiz = [
  (questions = {
    question1: "What is Baby Yoda's real name?",
    question2: "What is Mando's real name from The Mandalorian?",
    question3: "Han Solo was frozen in what?",
    question4: "Finish this quote from The Mandalorian: `This is the ___`",
    question5: "Lightsabers are powered by what type of crystal?",
    question6: "Who is Darth Vader's grandson?",
    question7: "What episode is The Phantom Menace?",
    question8: "Where is Jabba the Hutt's Palace located?",
    question9: "According to Luke, confronting what is the destiny of a Jedi?",
    question10: "Bo-Katan wanted what from Moff Gideon in The Mandalorian?",
  }),
  (answers = [
    (question1Answers = {
      option1: {
        answer: "The Foundling.",
        isTrue: false,
      },
      option2: {
        answer: "Grogu.",
        isTrue: true,
      },
      option3: {
        answer: "Yodito.",
        isTrue: false,
      },
      option4: "Mini-Me.",
      isTrue: false,
    }),
    (question2Answers = {
      option1: {
        answer: "Boba Fett.",
        isTrue: false,
      },
      option2: {
        answer: "Han Solo.",
        isTrue: false,
      },
      option3: {
        answer: "Din Djarin.",
        isTrue: true,
      },
      option4: {
        answer: "Joel",
        isTrue: false,
      },
    }),
  ]),
];

let onRulesBtnClick = () => {
  document.querySelector(".rules");
  console.log("yay!");
};
