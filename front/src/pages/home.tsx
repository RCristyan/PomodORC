import React from "react";
import Timer from "../components/timer/timer";

function Home(props:any) {
  let time = props.match.params.totaltime===undefined ? 0: props.match.params.totaltime;
  let list = props.match.params.list;
  let activity = props.match.params.activity===undefined ? "Bem-Vindo!!!": props.match.params.activity;

  return (
    <div className="Home">
      <Timer listTitle={list} activityTitle={activity} totaltime={time}/>
    </div>
  );
}

export default Home;