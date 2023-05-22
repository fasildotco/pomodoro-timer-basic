var initialMinutes = 45;
var minutes = initialMinutes;
var seconds = 0;
var timer;
var isTimerRunning = false;

function startPauseTimer() {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  isTimerRunning = true;
  document.getElementById("startButton").innerHTML = "Pause";
  document.getElementById("startButton").style.backgroundColor = "yellow";
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  document.getElementById("startButton").innerHTML = "Resume";
  document.getElementById("startButton").style.backgroundColor = "red";
}

function resetTimer() {
  clearInterval(timer);
  minutes = initialMinutes;
  seconds = 0;
  isTimerRunning = false;
  document.getElementById("startButton").innerHTML = "Start";
  document.getElementById("startButton").style.backgroundColor = "red";
  updateTimerDisplay();
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      alert("Timer completed!");
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  var timerDisplay = document.getElementById("timer");

  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  timerDisplay.innerHTML = formattedMinutes + ":" + formattedSeconds;
}
