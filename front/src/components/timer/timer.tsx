import React from 'react';
import './timer.css';

function Timer() {
  return (
    <div className="timer">
        <div className="circle">
            <div className="numbers">
                <p>00:00</p> 
            </div>
        </div>
    </div>
  );
}

export default Timer;