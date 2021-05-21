import React from "react";
import Timer from "../components/timer/timer";

function TimerTest(props:any) {
  return (
    <div className="Home">
      <Timer totaltime={props.match.params.totaltime}/>
    </div>
  );
}

export default TimerTest;