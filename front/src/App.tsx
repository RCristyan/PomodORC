import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Timer from './components/timer/timer';
import StopWatch from './components/timer/StopWatch';
import './App.css';

///<Timer listTitle="Lista1" activityTitle="Tarefa1" totaltime={300}/>
///<StopWatch listTitle="Lista1" activityTitle="Tarefa1"/>

function App() {
  return (
    <div className="App">

      <Sidebar />
      <StopWatch listTitle="Lista1" activityTitle="Tarefa1"/>
      <Header />
    </div>
  );
}

export default App;
