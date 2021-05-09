import React from 'react';
import './createlist.css';

function Createlist() {
  return (
    <div className="createlist">
        <form className="form" method="" action="/">
            <div className="titulo">
                <p>Título:</p>
                <input type="text" className="titulo_input" value="texto de referencia p/titulo"/>
            </div>
            <div>
                <p>Descrição:</p>
                <textarea className="descricao_input">texto de referencia p/descricao"</textarea>
            </div>
            <div>
                <p>Tarefas:</p>
                <input type="text" className="tarefas_input" value="Tarefa sendo criada"/>
            </div>
            <div>
                <button type="button" className="savebutom" >Salvar</button> 
            </div>
        </form>
    </div>
  );
}

export default Createlist;