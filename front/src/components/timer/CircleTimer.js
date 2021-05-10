import React from 'react';
import './timer.css';

function CTimer() {
  const startHours = 0;
  const startMinutes = 5;
  const startSeconds = 30;

  let time = startHours*3600 + startMinutes*60 + startSeconds;

  const countDown = "00:00";

  function updateCountdown(){
    if(time <= 0){
      clearInterval(setCountdown)
    }
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerText = minutes + ":" + seconds;
    time--;
  }

  updateCountdown()
  const setCountdown = setInterval(updateCountdown, 1000);

  return (
    time
  );
}

export default CTimer;