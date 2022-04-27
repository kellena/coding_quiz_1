var startButton = document.querySelector("#startBtn");
var playAgain = document.querySelector("#again");
var clearScores = document.querySelector("#clearScores")

var startContainer = document.getElementById("startContainer");
var questionContainer = document.getElementById("questionContainer");
var questions = document.getElementsByClassName("questions")
var question = document.getElementById("question")
var answerBtns = document.getElementById("answerBtns")
var endContainer = document.getElementById("endContainer");

var scorePage = document.getElementById("theScorePage")
var score = document.getElementById("score");
var formInitials = document.getElementById("initialsForm");
var scoreContainer = document.getElementById("scoreContainer")
var viewScore = document.getElementById("viewScores")
var highScoreList = document.getElementById("highScoreList")

var correct = document.getElementById("correct")
var wrong = document.getElementById("wrong")
var timer = document.querySelector("#timer");

var score = 0;
var timeLeft;
var gameOver;

var highScores = [];
var questionArray
var questionIndex = 0

var questions = [
    {
        question: "1: How do you connect JavaScript files in HTML?",
        answers: ["<javascript>","<script>","<jungle>","<pantera>"],
        correct: "<script>"
    },{
        question: "2: How do you write 'Heya Stevie!' in an alert box?",
        answers: ["msgbox('Hello World')","msg('Heya Stevie!')","alert('Heya Stevie!')","heya('Stevie!')"],
        correct: "alert('Heya Stevie!')"
    },{
        question: "3: How do you call myFunction?",
        answers: ["myFunction();","call myFunction();","call my call function();","callMeByYourName();"],
        correct: "myFunction();"
    },{
        question: "4: How can you add a comment in JavaScript?",
        answers: ["<!--Like this!-->","~Like this!~","'Like this!'","//Like this!"],
        correct: "d"
    },{
        question: "5: What IS JavaScript?",
        answers: ["A lovely flavor of coffee","A scripting language for complex features","A Star Wars character's screenplay","A painting program"],
        correct: "A scripting language for complex features"
    }
]

var showStartPage = function () {
    theScorePage.classList.add("hide")
    theScorePage.classList.remove("show")
    startContainer.classList.remove("hide")
    startContainer.classList.add("show")
  score.removeChild(score.lastChild)
  
  location.reload();

  questionIndex = 0
  gameOver = ""
  timer.textContent = 0 
  score = 0

  if (correct.className = "show") {
      correct.classList.remove("show");
      correct.classList.add("hide")
  }
  if (wrong.className = "show") {
      wrong.classList.remove("show");
      wrong.classList.add("hide");
  }
}

var setTime = function () {
    timeLeft = 30;
  
    var timerCheck = setInterval(function() {
        timer.innerText = timeLeft;
        timeLeft--
    
        if (gameover) {
            clearInterval(timerCheck)
        }
    
        if (timeLeft < 0) {
            showScore()
            timer.innerText = 0
            clearInterval(timerCheck)
        }
    
        }, 1000)
};

var setQuestion = function() {
    resetAnswers();
    displayQuestion(questions[questionIndex]);
};

var startGame = function() {
  
    startContainer.classList.add('hide');
    startContainer.classList.remove('show');
    questionContainer.classList.remove('hide');
    questionContainer.classList.add('show');
    
    questionArray = questions.sort(() => Math.random())
    setTime()
    setQuestion()
};
  
var resetAnswers = function() {
    while (answerBtns.firstChild) {
      answerBtns.removeChild(answerBtns.firstChild)
    };
};