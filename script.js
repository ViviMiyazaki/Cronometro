const timer = document.getElementById('timer')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.increaseTime')
const buttonDecreaseTime = document.querySelector('.decreaseTime')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

/*let start = Number()
function increaseTime() {
  if(start >= 0) {
   start + 5
  }
} 
function decreaseTime() {
  if(start > 5) {
    start - 5
  }
}
*/

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
 timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutesF = Number(minutesDisplay.textContent)
    
    updateTimerDisplay(minutesF, 0) 

    if(minutesF <= 0) {
     return
    }

    if(seconds <= 0) {
      seconds = 60
      --minutesF
    }

    updateTimerDisplay(minutesF, String(seconds - 1))
   
    countdown()
   }, 1000)
}

buttonPlay.addEventListener('click', function() {
 countdown()
})

buttonStop.addEventListener('click', function() {
  resetTimer()
})

buttonIncreaseTime.addEventListener('click', function() {
 minutes = increaseTime() || 0
 updateTimerDisplay(minutes, 0)
})

buttonDecreaseTime.addEventListener('click', function() {
  minutes = decreaseTime() || 0
  updateTimerDisplay(minutes, 0)
})

