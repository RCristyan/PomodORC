import React, { useState, useEffect } from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressBar from './ProgressBar';
import './timer.css';

function Timer() {

  const [timerSec, setTimerSec] = useState(0);
  const [timerMin, setTimerMin] = useState(0);
  const [isPause, setIsPause] = useState(true);

  function reset() {
    setTimerSec(0);
    setTimerMin(0);
    setIsPause(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerSec < 59 && isPause === false) {
        setTimerSec(timerSec => timerSec + 1);
      } else if (timerSec === 59) {
        setTimerMin(timerMin => timerMin + 1);
        setTimerSec(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  });


  return (
    <div className="timer">
      <section className="timer-content">
        <div className="listTitle">Lista1</div>
        <div className="activityTitle">Tarefa1</div>
        <ProgressCircle
          totaltime={60}
          size={320}
          strokeWidth={5}
          timerSec={timerSec}
          timerMin={timerMin}
        />
        {/* <ProgressBar 
          totaltime={60}
        /> */}

        <div className="buttons">
          <button className="timerBtnStart" onClick={() => { setIsPause(false) }}>Iniciar</button>
          <button className="timerBtnPause" onClick={reset}>Reiniciar</button>
          <button className="timerBtnStop" onClick={() => { setIsPause(true) }}>Parar</button>
        </div>
      </section>
    </div>
  );
}

export default Timer;