import Routes from "./router";
import React, { useContext } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Timer from './components/timer/timer';
import StopWatch from './components/timer/StopWatch';
import './App.css';

///
///<StopWatch listTitle="Lista1" activityTitle="Tarefa1"/>

function App() {
  
  return (
    <div className="App">
      <Routes />
      {/* <Timer listTitle="Lista1" activityTitle="Tarefa1" totaltime={2520}/> */}
    </div>
  );
}

export default App;
