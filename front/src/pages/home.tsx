import React from "react";
import Timer from "../components/timer/timer";

function Home() {
  return (
    <div className="Home">
      <Timer totaltime={0}/>
    </div>
  );
}

export default Home;