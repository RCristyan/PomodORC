import React, { useState, useEffect} from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressBar from './ProgressBar';
import './timer.css';
import { useNotification } from '../notifications/NotificationProvider';

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

      /*
  if currentCycle <= cycles
    ....
  elsif extraTime != 0
    time = extraTime
    condicional na decrecao do timeNow e no envio p/ barra
  else
    disable buttons
    notification TEMPO ACABOU
  */

function Timer(props: any) {
  const {
    listTitle,
    activityTitle,
    totaltime
  } = props;

  const [mode, setTimerMode] = useState("work");

  let cycletime = mode == "rest" ? 5 : 25;
  const cycles = Math.floor(totaltime/1800);
  const [currentCycle, setCurrentCycle] = useState(0.5);
  const extraTime = totaltime%1800;

  const [timeNow, setTimeNow] = useState(0);
  const [timerSec, setTimerSec] = useState(cycles > 0 ? 0 : extraTime%60);
  const [timerMin, setTimerMin] = useState(cycles > 0 ? cycletime : Math.floor(extraTime/60));

  const [isPause, setIsPause] = useState(true);
  const [showHideStartBtn, setStartBtn] = useState(totaltime>0 ? true : false);
  const [showHideResetBtn, setResetBtn] = useState(false);

  function reset() {
    setTimeNow(timerSec === 0 && timerMin === 0 ? timeNow : 
      timeNow - ((cycletime*60) - (timerMin*60+timerSec)));

    if(extraTime>0 && timeNow >= (totaltime-extraTime)){
      setTimerSec(extraTime%60);
      setTimerMin(Math.floor(extraTime/60));
    }else{
      setTimerSec(0);
      setTimerMin(cycletime);
    }  
    setIsPause(showHideStartBtn ? true : false);
    setStartBtn(true);
  }

  function play(){
    setResetBtn(true);
    setIsPause(!isPause)
  }

  function endCycle(){
    setCurrentCycle(currentCycle=>currentCycle + 0.5);
    
    if(timeNow >= totaltime){
      setResetBtn(false)
      setStartBtn(false)
    }
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
    if(timeNow<totaltime){
      if(mode==="rest"){
        dispatch({
            type: "REST_OVER",
            message: "De volta ao trabalho...",
            title: "TIME'S UP!!!",
        })
      } else{
        dispatch({
            type: "WORK_OVER",
            message: "Hora de descansar...",
            title: "TIME'S UP!!!",
        })
      }
    }else{
      if(mode==="rest"){
        dispatch({
            type: "REST_OVER",
            message: "Seu tempo acabou...",
            title: "TIME'S UP!!!",
        })
      } else{
        dispatch({
          type: "WORK_OVER",
          message: "Seu tempo acabou...",
          title: "TIME'S UP!!!",
        })
      }
    }
    
    setStartBtn(false);
    endCycle();
    console.log({mode, currentCycle})
    setTimerMode(mode === "rest" ? "work" : "rest");
    
  }

  return (
    <div className="timer">
      <div className="listTitle">{listTitle}</div>
      <div className="activityTitle">{activityTitle}</div>
      <ProgressCircle
        circleTotalTime={cycles > 0 ? cycletime*60 : extraTime}
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
        {showHideStartBtn && (
          <button className="timerBtn" onClick={play}>{showHideResetBtn ? (isPause ? "Retomar" : "Pausar") : "Iniciar"}</button>
        )}
        
        {showHideResetBtn && (
          <button className="timerBtn" onClick={reset}>{showHideStartBtn ? "Reiniciar" : "Próxima Fase"}</button>
        )}              
      </div>

    </div>
  );
}

export default Timer;