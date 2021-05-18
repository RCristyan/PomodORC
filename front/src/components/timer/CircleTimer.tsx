import React from 'react';
import './timer.css';
/*
////Progress
const circle:any = document.querySelector(".progress_circle");
const radius = circle.r.baseVal.value;
const circumference = radius*2*Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent:number){
    const offset = circumference - circumference*(percent/100);
    circle.style.strokeDashoffset = offset;
}

////Settings
const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");


document.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
});

document.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
});

//////Timer
///const mindiv:any = "24";
///const secdiv:any = "59";

let initial, totalsecs:number, perc, paused, mins:number, seconds:number;

mins = 2;
seconds = mins*60;
totalsecs = mins*60;
setTimeout("decrementT()", 60);

function decrementT(){
  ///mindiv.textContent = Math.floor(seconds/60);
  ///secdiv.textContent = seconds % 60;

  if(seconds > 0){
      perc = Math.ceil(((totalsecs - seconds) / totalsecs)* 100);
      setProgress(perc);
      seconds--;
      initial = window.setTimeout("decrementT()", 1000);
  }else{
    mins = 0;
    seconds = 0;
  }
}

*/
function CTimer() {


  return (
    <div className="timer">
      <div className="circle">
        <div className="numbers">
          <h1>00:00</h1>
        </div>
      </div>
    </div>
  );
}

export default CTimer;
