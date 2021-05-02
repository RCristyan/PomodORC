import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />   
    </div>
  );
}

export default App;
