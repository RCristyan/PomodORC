import React from 'react';
import './createlist.css';

function Createlist() {
  return (
    <div className="createlist">
        <form method="" action="/">
            <div>
                <p>Título:</p>
                <input type="text"/>
            </div>
            <div>
                <p>Descrição:</p>
                <textarea name="lala"></textarea>
            </div>
            <div>
                <p>Tarefas:</p>
                <input type="text" name="" id="" />
            </div>
        </form>
    </div>
  );
}

export default Createlist;