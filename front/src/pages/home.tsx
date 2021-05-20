import React from "react";
import Timer from "../components/timer/timer";

function Home() {
  return (
    <div className="Home">
      <Timer totaltime={5} listTitle='FODAC'  activityTitle='VAI a MERDA'/>
    </div>
  );
}

export default Home;