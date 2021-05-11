import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Timer from './components/timer/timer';
import './App.css';


function App() {
  return (
    <div className="App">

      <Sidebar />
      <Timer listTitle="Lista1" activityTitle="Tarefa1" totaltime={300}/>  
      <Header />
    </div>
  );
}

export default App;
