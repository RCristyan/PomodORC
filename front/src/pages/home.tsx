import React from "react";
import Timer from "../components/timer/timer";

function Home(props:any) {
  let time = props.match.params.totaltime===undefined ? 0: props.match.params.totaltime;

  return (
    <div className="Home">
      <Timer totaltime={time}/>
    </div>
  );
}

export default Home;