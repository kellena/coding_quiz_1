var startBtn = document.getElementById("startBtn");

var displayQuestion = document.getElementById("quizQuestion");
var quizDisplay = document.getElementById("quizDisplay");
var displayAnswers = document.getElementById("quizAnswers");

var timer = 45;
var score = 0;
var countdown;
var displayTimer = document.createElement("h1");
var displayScore = document.createElement("h1");

document.body.appendChild(displayTimer);
document.body.appendChild(displayScore);


function startQuiz() {

    if (startBtn.style.display === "none") {
        startBtn.style.display = "block";
    } else {
        startBtn.style.display = "none";
    }

    var countdown = setInterval(function () {

        if (timer > 0) {
            timer--;
            displayTimer.textContent = timer;
        } else {
            clearInterval(countdown);
            gameOver();
            timer = 45;
            displayTimer.textContent = timer;
            localStorage.setItem("player score", score);
            document.location.reload();
        }
        
      }, 1000);

      displayQuiz();

};


function displayQuiz() {};

function checkAnswer() {};

function hideQuiz() {};

function gameOver() {};

