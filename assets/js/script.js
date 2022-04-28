var startBtn = document.querySelector("#startBtn");
var playAgain = document.querySelector("#again");
var clearScores = document.querySelector("#clearScores")

var startContainer = document.getElementById("startContainer");
var questionContainer = document.getElementById("questionContainer");
var questions = document.getElementsByClassName("questions")
var question = document.getElementById("question")
var answerBtns = document.getElementById("answerBtns")
var endContainer = document.getElementById("endContainer");

var scorePage = document.getElementById("scorePage")
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
    scorePage.classList.add("hide")
    scorePage.classList.remove("show")
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

var displayQuestion = function(index) {
    question.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerBtn = document.createElement('button')
        answerBtn.innerText = index.choices[i].choice
        answerBtn.classList.add('button')
        answerBtn.classList.add('answerBtn')
        answerBtn.addEventListener("click", answerCheck)
        answerBtn.appendChild(answerBtn)
    }
};

var answerCheck = function(event) {
    var selectedAns = event.target
        if (questions[questionIndex].a === selectedAns.innerText){
            isCorrect()
            score = score + 5
        } else {
          isWrong()
          score = score - 1;
          timeLeft = timeLeft - 5;
      };
    
    questionIndex++
        if  (questionArray.length > questionIndex + 1) {
            setQuestion()
        } else {
           gameOver = "true";
           showScore();
        }
};

var isCorrect = function() {
    if (correct.className = "hide") {
        correct.classList.remove("hide")
        correct.classList.add("score")
        wrong.classList.remove("score")
        wrong.classList.add("hide")
    }
};  
  
var isWrong = function() {
    if (wrong.className = "hide") {
        wrong.classList.remove("hide")
        wrong.classList.add("score")
        correct.classList.remove("score")
        correct.classList.add("hide")
    }
};

var showScore = function () {
    questionContainer.classList.add("hide");
    endContainer.classList.remove("hide");
    endContainer.classList.add("show");
  
    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    score.appendChild(scoreDisplay);
}       
  
var createHighScore = function(event) { 
    event.preventDefault() 
    var initials = document.querySelector("#initials").value;
    if (!initials) {
      alert("Please enter your intials to track your score.");
      return;
    }
}
  
formInitials.reset();

var highScore = {
    initials: initials,
    score: score
} 
    
highScores.push(highScore);
highScores.sort((a, b) => {return b.score-a.score});
    
while (highScoreList.firstChild) {
    highScoreList.removeChild(highScoreList.firstChild)
}

for (var i = 0; i < highScores.length; i++) {
    var highscore = document.createElement("li");
    highscore.ClassName = "high-score";
    highscore.innerHTML = highScores[i].initials + " --- " + highScores[i].score;
    highScoreList.appendChild(highScore);
}

var saveScores = function () {
    localStorage.setItem("highScores", JSON.stringify(highScores))
}
  
var loadScores = function () {
    var loadedScores = localStorage.getItem("highScores")
        if (!loadedScores) {
        return false;
    }
    loadedScores = JSON.parse(loadedScores);
    loadedScores.sort((a, b) => {return b.score-a.score})
  
    for (var i = 0; i < loadedScores.length; i++) {
        var highScore = document.createElement("li");
        highScore.ClassName = "high-score";
        highScore.innerText = loadedScores[i].initials + " - " + loadedScores[i].score;
        highScoreList.appendChild(highScore);
  
        highScores.push(loadedScores[i]);
    }
}

var displayScores = function() {

    scorePage.classList.remove("hide");
    scorePage.classList.add("show");
    gameOver = "true"
  
    if (endContainer.className = "show") {
      endContainer.classList.remove("show");
      endContainer.classList.add("hide");
    }
    if (startContainer.className = "show") {
      startContainer.classList.remove("show");
      startContainer.classList.add("hide");
    }
    if (questionContainer.className = "show") {
      questionContainer.classList.remove("show");
      questionContainer.classList.add("hide");
    }
    if (correct.className = "show") {
        correct.classList.remove("show");
        correct.classList.add("hide");
    }
    if (wrong.className = "show") {
        wrong.classList.remove("show");
        wrong.classList.add("hide");
    }
}

startButton.addEventListener("click", startGame)
formInitials.addEventListener("submit", createHighScore)
viewScore.addEventListener("click", displayScores)
playAgain.addEventListener("click", showStartPage)

saveScores();
loadScores();
displayScores();