const questions = [
  {
    question: "What is the capital of India?",
    answer: "Delhi",
  },
  {
    question: "Which language is used for web apps?",
    answer: "JavaScript",
  },
  {
    question: "HTML stands for?",
    answer: "HyperText Markup Language",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer-input");
const quizForm = document.getElementById("quiz-form");
const resultEl = document.getElementById("result");

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  answerInput.value = "";
  resultEl.textContent = "";
}

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  quizForm.style.display = "none";
  resultEl.innerHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;
}

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userAnswer = answerInput.value.trim();
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

showQuestion();
