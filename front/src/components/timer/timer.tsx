import { useState, useEffect } from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressBar from './ProgressBar';
import './timer.css';

function Timer(props: any) {
  const {
    listTitle,
    activityTitle,
    totaltime
  } = props;

  let mode = "rest";
  let cycletime = mode === "rest" ? 5 : 25;

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
      if (timerSec > 0 && isPause === false) {
        setTimerSec(timerSec => timerSec - 1);
      } else if (timerSec === 0) {
        if (timerMin === 0) {
          clearInterval(interval);
        } else {
          setTimerMin(timerMin => timerMin - 1);
          setTimerSec(59);
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
        cycletime={cycletime * 60}
        size={320}
        strokeWidth={5}
        timerSec={timerSec}
        timerMin={timerMin}
      />
      <ProgressBar
        totaltime={totaltime}
        strokeWidth={5}
        timerSec={timerSec}
        timerMin={timerMin}
      />

      <div className="timerBtns">
        <button className="timerBtnStart" onClick={() => { setIsPause(false) }}>Iniciar</button>
        <button className="timerBtnPause" onClick={reset}>Reiniciar</button>
        <button className="timerBtnStop" onClick={() => { setIsPause(true) }}>Parar</button>
      </div>

    </div>
  );
}

export default Timer;