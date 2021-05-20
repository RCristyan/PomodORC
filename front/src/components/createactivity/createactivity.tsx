import { useState } from 'react';
import icon from '../../assets/icon_dump.png';
import './createactivity.css';
import api from '../../services/api';

function Createactivity() {

    const [newName, setNewName] = useState('');
    const [idList, setIdList] = useState('');

    const newActivity = async (name: string, id:string) => {
        try {
            await api.post(`/create/${id}`, {
                name: name
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="createactivity">
            <section className="createactivitycontainer">
                <form 
                    className="createactivityform" 
                    method="" 
                    action="/"
                >
                    <section className="first-content">
                        <div className="title">
                            <p className="standardtext">Nome da Lista:</p>
                            <input type="text" 
                                className="title_input" 
                                placeholder="Insira a lista em que deseja adicionar atividade" 
                                value= {idList}
                                onChange= {(event) =>{
                                    setIdList(event.target.value)
                                }}
                            />
                        </div>
                        <div className="description_conteiner">
                            <p className="standardtext">Nome da Atividade:</p>
                            <input
                                className="description_input" 
                                placeholder="Insira o nome da atividade" 
                                value={newName}
                                onChange= {(event) =>{
                                    setNewName(event.target.value)
                                }}
                            />
                        </div>
                        <div className="timer-content">
                            <div className="text-content">
                                <div className="title-timer">
                                    <p>Timer</p>
                                </div>
                                <div className="title-plus-dump">
                                    <a href="a"><p>+</p></a>
                                    <div className="icon-dum">
                                        <a href="a">
                                            <img src={icon} alt="lixeira deletar tarefa" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="input-timer-content">
                                <input 
                                    className="input-timer" 
                                    type="time" 
                                />
                            </div>
                        </div>
                    </section>
                    <div className="save_conteiner">
                        <a href="/">
                            <button 
                                type="submit" 
                                className="savebutom" 
                                onClick={() =>{newActivity(newName, idList)}}
                            >
                                Salvar
                            </button>
                        </a>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Createactivity;