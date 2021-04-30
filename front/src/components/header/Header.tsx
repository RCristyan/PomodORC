import React from 'react';
import icon from '../../assets/icon_pomodoro.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className="h1">Pomod</div>
        <div className="h2">ORC</div>
        <div className="h3">.</div>
        <img className="icon" src={icon}/>
    </div>
  );
}

export default Header;