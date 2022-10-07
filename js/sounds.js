export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  function pressButton() {
    buttonPressAudio.play()
  }

 return {
  pressButton
 }
}