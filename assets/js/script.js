var startButtonEl = document.querySelector("#startBtn");
var playAgainEl = document.querySelector("#again");
var clearScoresEl = document.querySelector("#clearScores")

var startContainerEl = document.getElementById("startContainer");
var questionContainerEl = document.getElementById("questionContainer");
var questionsEl = document.getElementsByClassName("questions")
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answerBtns")
var theEndContainerEl = document.getElementById("theEndContainer");

var theScorePageEl = document.getElementById("theScorePage")
var scoreEl = document.getElementById("score");
var formInitialsEl = document.getElementById("initialsForm");
var scoreContainerEl = document.getElementById("scoreContainer")
var viewScoreEl = document.getElementById("viewScores")
var highScoreListEl = document.getElementById("highScoreList")

var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
var timerEl = document.querySelector("#timer");

var score = 0;
var timeleft;
var gameover
    timerEl.innerText = 0;

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
    theScorePageEl.classList.add("hide")
    theScorePageEl.classList.remove("show")
    startContainerEl.classList.remove("hide")
    startContainerEl.classList.add("show")
  scoreEl.removeChild(scoreEl.lastChild)
  
  location.reload();

  questionIndex = 0
  gameover = ""
  timerEl.textContent = 0 
  score = 0

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide")
  }
  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
  }
}