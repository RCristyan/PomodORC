import React from 'react';
import './createlist.css';

function Createlist() {
  return (
    <div className="createlist">
        <form className="form" method="" action="/">
            <div className="titulo">
                <p>Título:</p>
                <input type="text" className="titulo_input"/>
            </div>
            <div>
                <p>Descrição:</p>
                <input type="text" className="descricao_input" ></input>
            </div>
            <div>
                <p>Tarefas:</p>
                <input type="text" className="tarefas_input"/>
            </div>
            <div>
                <button type="button" className="savebutom" >Salvar</button> 
            </div>
        </form>
    </div>
  );
}

export default Createlist;