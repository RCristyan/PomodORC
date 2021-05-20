import { useState } from 'react';
import './createlist.css';
import api from '../../services/api';

function Createlist() {

    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');

    const newList = async (title: string, body: string) => {
        try {
            await api.post('/create', {
                title: title,
                body: body,
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="createlist">
            <section className="createlistcontainer">
                <form
                    className="createlistform"
                    method=""
                >
                    <section className="first_content">
                        <div className="title">
                            <p className="standardtext">
                                Título:
                                </p>
                            <input
                                type="text"
                                className="title_input"
                                placeholder="Insira um título para a lista"
                                value={newTitle}
                                onChange={(event) => {
                                    setNewTitle(event.target.value)
                                }}
                            />
                        </div>
                        <div className="description_conteiner">
                            <p className="standardtext">Descrição:</p>
                            <textarea
                                className="description_input"
                                placeholder="Insira uma descrição para a lista"
                                value={newBody}
                                onChange={(event) => {
                                    setNewBody(event.target.value);
                                }}
                            />
                        </div>
                        <div className="tasks_conteiner">
                            <section className="task_first_conteiner">
                                <p className="standardtext">Tarefas:</p>
                                <input
                                    type="text"
                                    className="task_input"
                                    placeholder="texto de referencia p/tarefa"
                                />
                            </section>
                            <section className="task_second_conteiner">
                                <div className="plus">
                                    <a href="/">
                                        +
                                        </a>
                                </div>
                            </section>
                        </div>
                    </section>
                    <div className="save_conteiner">
                        <button
                            type="submit"
                            className="savebutom"
                            onClick={() => { newList(newTitle, newBody) }}
                        >
                            Salvar
                                </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Createlist;