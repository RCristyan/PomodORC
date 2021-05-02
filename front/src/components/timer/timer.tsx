import React from 'react';
import './timer.css';

function Timer() {
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

export default Timer;