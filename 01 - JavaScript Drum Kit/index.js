window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!key) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!key) return;
  
  key.classList.remove('playing');
}