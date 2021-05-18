import React, { useState, useEffect } from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressBar from './ProgressBar';
import CTimer from './CircleTimer';
import './timer.css';

function StopWatch(props:any) {
    const {
        listTitle,
        activityTitle
    } = props;

    const [timerMSec, setTimerMSec] = useState(0);
    const [timerSec, setTimerSec] = useState(50);
    const [timerMin, setTimerMin] = useState(59);
    const [timerHour, setTimerHour] = useState(0);
    const [isPause, setIsPause] = useState(true);
  
    function reset() {
      setTimerMSec(0);
      setTimerSec(0);
      setTimerMin(0);
      setTimerHour(0);
      setIsPause(true);
    }

    function increaseSecs(){
        if (timerSec < 59) {
            setTimerSec(timerSec => timerSec + 1);
          } 
          else if (timerSec === 59) {
            increaseMins();
            setTimerSec(0);
          }
    }

    function increaseMins(){
        if (timerMin < 59) {
            setTimerMin(timerMin => timerMin + 1);
          } 
          else if (timerSec === 59) {
            setTimerHour(timerHour => timerHour + 1);
            setTimerMin(0);
          }
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        if(isPause === false){
          if (timerMSec < 99) {
            setTimerMSec(timerMSec => timerMSec + 1);
          } 
          else if (timerMSec === 99) {
            increaseSecs();
            setTimerMSec(0);
          }
             
        }
        
      }, 10);
      return () => clearInterval(interval);
    });


  return (
    <div className="timer">
      <div className="listTitle">{listTitle}</div>
      <div className="activityTitle">{activityTitle}</div>
    
      <div className="numbers">
             {
                `${timerHour < 10 ? "0" + timerHour : timerHour}:${timerMin < 10 ? "0" + timerMin : timerMin}:${timerSec < 10 ? 
                    "0" + timerSec : timerSec}:${timerMSec < 10 ? "0" + timerMSec : timerMSec}`
            }
      </div>

      <div className="timerBtns">
        <button className="timerBtnStart" onClick={() => { setIsPause(false) }}>Iniciar</button>
        <button className="timerBtnPause" onClick={reset}>Reiniciar</button>
        <button className="timerBtnStop" onClick={() => { setIsPause(true) }}>Parar</button>
      </div>

    </div>
  );
}

export default StopWatch;