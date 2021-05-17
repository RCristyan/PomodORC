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
                    <div className="timer-content">
                        <div className="text-content">
                            <div className="title-timer">
                                <p>Timer</p>
                            </div>
                            <div className="title-plus">
                                <p>+</p>
                            </div>
                        </div>
                        <div className="input-timer-content">
                            <input className="input-timer" type="time" value="00:00"/> 
                        </div>
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