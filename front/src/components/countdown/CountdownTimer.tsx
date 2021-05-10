import { useEffect, useState } from 'react';

export default function CountdownComponent() {

  const [timerSec, setTimerSec] = useState(0);
  const [timerMin, setTimerMin] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function reset() {
    setTimerSec(0);
    setTimerMin(0);
    setIsActive(false);
  }

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerSec < 59 || isActive) {
        setTimerSec(timerSec => timerSec + 1);
      } else if (timerSec === 59) {
        setTimerMin(timerMin => timerMin + 1);
        setTimerSec(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

}