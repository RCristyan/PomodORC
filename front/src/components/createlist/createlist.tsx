import React from 'react';
import './createlist.css';

function Createlist() {
  return (
    <div className="createlist">
        <section className="createlistcontainer">
            <form className="createlistform" method="" action="/">
                <section className="first_content">
                    <div className="title">
                        <p className="standardtext">Título:</p>
                        <input type="text" className="title_input" value="texto de referencia p/titulo"/>
                    </div>
                    <div className="description_conteiner">
                        <p className="standardtext">Descrição:</p>
                        <textarea className="description_input">texto de referencia p/descricao"</textarea>
                    </div>
                    <div className="tasks_conteiner">
                        <section className="task_first_conteiner">
                            <p className="standardtext">Tarefas:</p>
                            <input type="text" className="task_input" value="Tarefa sendo criada"/>
                        </section>
                        <section className="task_second_conteiner">
                            <div className="plus">+</div>
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