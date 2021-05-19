import React, { useState, useEffect } from 'react';
import './createlist.css';
import axios from 'axios';

function Createlist() {

    return (
        <div className="createlist">
            <section className="createlistcontainer">
                <form className="createlistform" method="" action="/">
                    <section className="first_content">
                        <div className="title">
                            <p className="standardtext">Título:</p>
                            <input type="text" className="title_input" placeholder="Insira um título para a lista" />
                        </div>
                        <div className="description_conteiner">
                            <p className="standardtext">Descrição:</p>
                            <textarea className="description_input" placeholder="Insira uma descrição para a lista" />
                        </div>
                        <div className="tasks_conteiner">
                            <section className="task_first_conteiner">
                                <p className="standardtext">Tarefas:</p>
                                <input type="text" className="task_input" placeholder="texto de referencia p/tarefa" />
                            </section>
                            <section className="task_second_conteiner">
                                <div className="plus"><a href="/">+</a></div>
                            </section>
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

export default Createlist;