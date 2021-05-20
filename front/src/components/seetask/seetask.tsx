import React from 'react';
import './seetask.css';
import icon from '../../assets/icon_trash.png';

function Seetask() {
  return (
    <div className="seetask">
      <section className= "seetaskcontainer">
        <section className="seetaskitems">
        <div className="list_name"><h1>Tarefa 1</h1></div>
        <div className="descricao"> 
          <h2 className="descricao_titulo">Descrição</h2>
          <p className="descricao_corpo">texto de referência p/ descrição</p>
        </div>
        <div className="time_container">
          <div className="relogio">
            <h1 className="timer_title">timer</h1>
            <div className="timer_icons">
              <h1>+</h1> <img alt="trashIcon" src={icon} />
            </div>
            </div> <h1 className="timer_numbers">00:00</h1>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Seetask; 