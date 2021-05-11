import React from 'react';
import ProgressCircle from "./ProgressCircle";
import ProgressBar from './ProgressBar';
import './timer.css';

function Timer() {

  return (
    <div className="timer">
      <div className="listTitle">Lista1</div>
      <div className="activityTitle">Tarefa1</div>
      <ProgressCircle 
        totaltime = {60}
        size = {320}
        strokeWidth = {5}
      />
      <ProgressBar 
        totaltime={60}
      />

      <div>
        <button className="timerBtnStart">Iniciar</button>
        <button className="timerBtnPause">Pausar</button>
        <button className="timerBtnStop">Parar</button>
      </div>
      
    </div>
  );
}

export default Timer;