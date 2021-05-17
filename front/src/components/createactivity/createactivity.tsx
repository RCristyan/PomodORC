import React from 'react';
import './createactivity.css';

function Createactivity() {
  return (
    <div className="createactivity">
        <section className="createactivitycontainer">
            <form className="createactivityform" method="" action="/">
                <section className="first-content">
                    <div className="title">
                        <p className="standardtext">Título:</p>
                        <input type="text" className="title_input" placeholder="texto de referencia p/titulo"/>
                    </div>
                    <div className="description_conteiner">
                        <p className="standardtext">Descrição:</p>
                        <textarea className="description_input" placeholder="texto de referencia p/descricao"/>
                    </div>
                </section>
                <div className="save_conteiner">
                    <a href="/"><button type="button" className="savebutom" >Salvar</button></a> 
                </div>
            </form>
        </section>
    </div>
  );
}

export default Createactivity;