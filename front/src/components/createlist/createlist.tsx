import React from 'react';
import './createlist.css';
import icon from '../../assets/icon_black_plus.png';

function Createlist() {
  return (
    <div className="createlist">
        <form className="form" method="" action="/">
            <div className="titulo">
                <h1>Título:</h1>
                <input type="text" className="titulo_input"/>
            </div>
            <div className="descricao">
                <h1>Descrição:</h1>
                <input type="text" className="descricao_input" ></input>
            </div>
            <div className="tarefas">
                <h1>Tarefas:</h1>
                <input type="text" className="tarefas_input"/>
            </div>
            <div>
                <button type="button" className="savebutom" >Salvar</button> 
            </div>
            <div className="black_plus">
            <a href=""><img className = "plusIcon" src={icon}/></a>
            </div>
        </form>
    </div>
  );
}

export default Createlist;