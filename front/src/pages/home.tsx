import React from "react";
import Timer from "../components/timer/timer";

function Home() {
  return (
    <div className="Home">
      <Timer listTitle = "Lista1" activityTitle="Tarefa1" totaltime={10}/>
    </div>
  );
}

export default Home;