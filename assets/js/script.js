var timer = document.querySelector("#timer");
var timeLeft = 30;
var startQuiz = document.querySelector("#startBtn");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var qIndex = 0;
var stopQuiz;

questions.textContent = "Basic Coding Quiz"
answers.textContent = "Click the start button to begin the quiz!"

startQuiz.addEventListener("click", function(){
    timerOn();
    displayQuiz();
    startQuiz.setAttribute("style", "display: none")
});

function timerOn() {
    stopQuiz = setInterval(function(){
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(stopQuiz);
            questions.textContent = "High Scores:";
            answers.innerHTML = localStorage.getItem("userInit") + " --- " + localStorage.getItem("userScore");    
        }
    }, 1000);
}

function displayQuiz() {
    var 
}