import {elements} from "./elements.js"
import Sound from './sounds.js'

const sound = Sound()

const {
  buttonPlay,
  buttonStop,
  buttonDecreaseTime,
  buttonIncreaseTime,
  minutesDisplay,
  secondsDisplay,
  buttonSoundCoffee,
  buttonSoundFire,
  buttonSoundRain,
  buttonSoundForest
} = elements

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
let fiveMinutes = 5

function increaseTime() {
  if(minutes >= 0) {
    updateTimerDisplay(minutes + fiveMinutes, 0)
    minutes += fiveMinutes
  }
} 
function decreaseTime() {
  if(minutes > 5) {
   updateTimerDisplay(minutes - fiveMinutes, 0)
   minutes -= fiveMinutes
  }
}


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

    if(minutesF <= 0 && seconds <= 0) {
      updateTimerDisplay(minutesF, seconds) 
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
 sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  resetTimer()
  sound.pressButton()
})

buttonIncreaseTime.addEventListener('click', function() {
  increaseTime()
  sound.pressButton()
  
})

buttonDecreaseTime.addEventListener('click', function() {
  decreaseTime() 
  sound.pressButton()
})

let buttonIsActive = false

buttonSoundForest.addEventListener('click', function() {
  const soundForest = document.querySelector('.forest')
  buttonSoundForest.classList.toggle('selected')

  if (buttonIsActive) {
    soundForest.pause()
    buttonIsActive = false
  } else {
    soundForest.play()
    buttonIsActive = true
  }
  
})

buttonSoundFire.addEventListener('click', function() {
  const soundFire = document.querySelector('.fire')
  buttonSoundFire.classList.toggle('selected')
 
  if (buttonIsActive) {
    soundFire.pause()
    buttonIsActive = false
  } else {
    soundFire.play()
    buttonIsActive = true
  }
})

buttonSoundRain.addEventListener('click', function() {
  const soundRain = document.querySelector('.rain')
  buttonSoundRain.classList.toggle('selected')
  
  if (buttonIsActive) {
    soundRain.pause()
    buttonIsActive = false
  } else {
    soundRain.play()
    buttonIsActive = true
  }
})

buttonSoundCoffee.addEventListener('click', function() {
  const soundCoffee = document.querySelector('.coffee')
  buttonSoundCoffee.classList.toggle('selected')
  
  if (buttonIsActive) {
    soundCoffee.pause()
    buttonIsActive = false
  } else {
    soundCoffee.play()
    buttonIsActive = true
  }
})

const buttonLight = document.querySelector('.buttonLight')
const buttonDark = document.querySelector('.buttonDark')

document.addEventListener('click', () => {
  const body = document.querySelector('body')
  const inputDarkMode = document.getElementById('input-dark-mode')
      
  inputDarkMode.addEventListener('click', () => {
      if(inputDarkMode.checked){
          body.setAttribute("dark", "true")
          buttonDark.classList.add('hide')
          buttonLight.classList.remove('hide')
      }else{
          body.removeAttribute("dark")
          buttonDark.classList.remove('hide')
          buttonLight.classList.add('hide')
      }
  })
})


