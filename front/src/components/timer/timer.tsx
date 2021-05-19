import React, { useState, useEffect } from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressBar from './ProgressBar';
import CTimer from './CircleTimer';
import './timer.css';

function Timer(props:any) {
  const {
    listTitle,
    activityTitle,
    totaltime
  } = props;

  let mode = "rest";
  let cycletime = mode == "rest" ? 5 : 25;
  let cycles = totaltime/3600;

  ///const [timeNow, setTimeNow] = useState(totaltime);
  const [timerSec, setTimerSec] = useState(0);
  const [timerMin, setTimerMin] = useState(cycletime);
  const [isPause, setIsPause] = useState(true);

  function reset() {
    setTimerSec(0);
    setTimerMin(cycletime);
    setIsPause(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(isPause === false){
        ///setTimeNow(timeNow => timeNow - 1);
        
        if (timerSec > 0) {
          setTimerSec(timerSec => timerSec - 1);
        } else if (timerSec === 0) {
          if(timerMin === 0){
            clearInterval(interval);
          } else{
            setTimerMin(timerMin => timerMin - 1);
            setTimerSec(59);
          }
        }
      }     
    }, 1000);
    return () => clearInterval(interval);
  });


  return (
    <div className="timer">
      <div className="listTitle">{listTitle}</div>
      <div className="activityTitle">{activityTitle}</div>
      <ProgressCircle
        cycletime={cycletime*60}
        size={320}
        strokeWidth={5}
        timerSec={timerSec}
        timerMin={timerMin}
      />
      <ProgressBar
        totaltime={totaltime}
        timerSec={timerSec}
        timerMin={timerMin}
      />

      <div className="timerBtns">
        <button className="timerBtn" onClick={() => {setIsPause(!isPause)}}>{isPause ? "Retomar" : "Pausar"}</button>
        <button className="timerBtn" onClick={reset}>Reiniciar</button>       
      </div>

    </div>
  );
}

export default Timer;
///<button className="timerBtnStop" onClick={() => { setIsPause(true) }}>Parar</button>