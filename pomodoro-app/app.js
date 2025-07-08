

const bells = new Audio('./mixkit-achievement-bell-600.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const session = document.querySelector('.minutes'); 
const session2 = document.querySelector('.seconds'); 
let myInterval; 
let state = true;


const appTimer =() => {
  const sessionAmount = Number.parseInt(session.textContent)
  const sessionAmount2 = Number.parseInt(session2.textContent)

  if(state) {
    bells.play()
    state = false;
    let totalSeconds = sessionAmount * 60 + sessionAmount2;

    const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds % 60;

        if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
        } 
        else {
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`

        if(minutesLeft === 0 && secondsLeft === 0) {
            bells.play()
            clearInterval(myInterval);
        }
    }
    myInterval = setInterval(updateSeconds, 1000);
  } 
  else {
    alert('Session has already started.')
  }
}

startBtn.addEventListener('click', appTimer);

