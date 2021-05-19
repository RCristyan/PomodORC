import React, { useState, useEffect} from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressBar from './ProgressBar';
import './timer.css';
import { useNotification } from '../notifications/NotificationProvider';

function Timer(props:any) {
  const {
    listTitle,
    activityTitle,
    totaltime
  } = props;

  let mode = "rest";
  let cycletime = mode == "rest" ? 5 : 25;
  let cycles = totaltime/3600;
  let extraTime = totaltime%3600;

  /*
  for cycles repetir timers de 5-25,
  dar notificacao ao termino de cada intervalo
  ao dar ok na notificacao:
    mudar mode
    cycles--
  ao termino dos cycles conferir se extraTime == 0
    se sim - notificar tempo final
    se nao - setar tempo = extraTime
  */

  const [timeNow, setTimeNow] = useState(0);
  const [timerSec, setTimerSec] = useState(0);
  const [timerMin, setTimerMin] = useState(cycletime);
  const [isPause, setIsPause] = useState(true);

  function reset() {
    setTimeNow(timeNow => timeNow - ((cycletime*60) - (timerMin*60+timerSec)));
    setTimerSec(0);
    setTimerMin(cycletime);
    setIsPause(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(isPause === false){
        if(timeNow < totaltime){
          setTimeNow(timeNow => timeNow + 1);
        }
        
        if (timerSec > 0) {
          setTimerSec(timerSec => timerSec - 1);
        } else if (timerSec === 0) {
          if(timerMin === 0){
            setIsPause(true);
            handleNewNotification();
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

  const dispatch = useNotification();
  
  function handleNewNotification(){
    if(mode==="rest"){
      dispatch({
          id: 0,
          type: "REST_OVER",
          message: "De volta ao trabalho...",
          title: "TIME'S UP!!!"
      })
    } else{
      dispatch({
          id: 1,
          type: "WORK_OVER",
          message: "Hora de descansar...",
          title: "TIME'S UP!!!"
        })
    }
  }

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
        timeNow={timeNow}
      />

      <div className="timerBtns">
        <button className="timerBtn" onClick={() => {setIsPause(!isPause)}}>{isPause ? "Retomar" : "Pausar"}</button>
        <button className="timerBtn" onClick={reset}>Reiniciar</button>       
      </div>

    </div>
  );
}

export default Timer;