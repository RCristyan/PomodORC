import React from 'react';
import './timer.css';

function StopWatch() {
  /*const startHours = 0;
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
  const setCountdown = setInterval(updateCountdown, 1000);*/

  const [timerMSec, setTimerMSec] = useState(0);
  const [timerSec, setTimerSec] = useState(0);
  const [timerMin, setTimerMin] = useState(0);
  const [timerHour, setTimerHour] = useState(0);
  const [isPause, setIsPause] = useState(true);

  function reset() {
    setTimerMSec(0);
    setTimerSec(0);
    setTimerMin(0);
    setTimerHour(0);
    setIsPause(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(isPause === false){
        if (timerMSec < 999) {
          setTimerMSec(timerMSec => timerMSec + 1);
        } 
        else if (timerMSec === 999) {
          if(timerSec === 59){
            setTimerSec(0);
          } else{
            setTimerSec(timerSec => timerSec + 1);
          }
          setTimerMSec(0);
        }
  
        if (timerSec < 59) {
          setTimerSec(timerSec => timerSec + 1);
        } 
        else if (timerSec === 59) {
          if(timerMin === 59){
            setTimerMin(0);
          } else{
            setTimerMin(timerMin => timerMin + 1);
          }
          setTimerSec(0);
        }
  
        if (timerMin < 59) {
          setTimerMin(timerMin => timerMin + 1);
        } 
        else if (timerSec === 59) {
          setTimerHour(timerHour => timerHour + 1);
          setTimerMin(0);
        }
      }
      
    }, 1);
    return () => clearInterval(interval);
  });

  return (
    time
  );
}

export default StopWatch;