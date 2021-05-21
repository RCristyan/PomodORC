import React from "react";
import Timer from "../components/timer/timer";
import StopWatch from "../components/timer/StopWatch";

function Home(props:any) {
  let time = (props.match.params.totaltime===undefined) ? 0: props.match.params.totaltime;
  let crono = props.match.params.totaltime==="crono" ? true: false;
  let list = props.match.params.list;
  let activity = props.match.params.activity===undefined ? "Bem-Vindo!!!": props.match.params.activity;

  return (
    <div className="Home">
      {!crono && <Timer listTitle={list} activityTitle={activity} totaltime={time}/>}
      {crono && <StopWatch listTitle={list} activityTitle={activity}/>}
    </div>
  );
}

export default Home;