import Routes from "./router";
import React, { useContext } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Timer from './components/timer/timer';
import StopWatch from './components/timer/StopWatch';
import './App.css';

///<Sidebar />
/// <Header />
///<Routes />
///<StopWatch listTitle="Lista1" activityTitle="Tarefa1"/>
///<Timer listTitle="Lista1" activityTitle="Tarefa1" totaltime={2520}/>

function App() {  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
