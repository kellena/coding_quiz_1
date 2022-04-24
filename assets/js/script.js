var timer = document.querySelector("#timer");
var timeLeft = 30;
var startQuiz = document.querySelector("#startBtn");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var timeIndex = 0;
var stopQuiz;

questions.textContent = "Basic Coding Quiz"
answers.textContent = "Click the start button to begin the quiz!"

startQuiz.addEventListener("click", function(){
    timerOn();
    qVisible();
    startQuiz.setAttribute("style", "display: none")
});

// decrement time after quiz start, stop quiz if time = 0
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