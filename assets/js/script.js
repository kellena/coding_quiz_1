var timer = document.querySelector("#timer");
var timeLeft = 30;

var startQuiz = document.querySelector("#startBtn");

var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");

var timeIndex = 0;
var stopQuiz;

questions.textContent = "Basic Coding Quiz"
answers.textContent = "Click the start button to begin the quiz!"

// hide quiz until start has been clicked
startQuiz.addEventListener("click", function(){
    timerOn();
    qVisible();
    startQuiz.setAttribute("style", "display: none")
})

// flesh out timerOn and qVisible functions