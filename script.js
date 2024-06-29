// Array of quiz questions and answers
const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2
    },
    // Add more quiz questions here...
  ];
  
  // Get the player's name before the game starts
  const playerName = prompt("Please enter your name:");
  
  // Get references to HTML elements
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const timerDisplay = document.getElementById("timer-display");
  const scoreDisplay = document.getElementById("score");
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeRemaining = 30; // 30 seconds per question
  
  // Shuffle the questions
  shuffleQuestions();
  
  // Start the quiz
  startQuiz();
  
  function shuffleQuestions() {
    for (let i = quizQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
  }
  
  function startQuiz() {
    displayQuestion();
    startTimer();
  }
  
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    answerButtons.forEach((button, index) => {
      button.textContent = currentQuestion.answers[index];
      button.addEventListener("click", () => checkAnswer(index));
    });
  }
  
  function startTimer() {
    timeRemaining = 30;
    timerDisplay.textContent = timeRemaining;
  
    timer = setInterval(() => {
      timeRemaining--;
      timerDisplay.textContent = timeRemaining;
  
      if (timeRemaining === 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }
  
  function checkAnswer(selectedIndex) {
    clearInterval(timer);
  
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
      scoreDisplay.textContent = score;
    }
  
    nextQuestion();
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
      startTimer();
    } else {
      // Display the final score in a popup box
      alert(`Congratulations, ${playerName}! Your score is ${score} out of ${quizQuestions.length}.`);
    }
  }