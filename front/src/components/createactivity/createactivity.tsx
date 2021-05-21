import { useState, useEffect } from 'react';
import iconTrash from '../../assets/icon_trash.png';
import iconPlus from '../../assets/icon_plus.svg';
import './createactivity.css';
import api from '../../services/api';

function Createactivity(props:any) {

    const [newName, setNewName] = useState('');
    const [idList, setIdList] = useState(props);
    const [lists, setLists] = useState([]);

    useEffect(() => {

        api.get(`/read`).then(res => {
          const listA = res.data;
          setLists(listA);
        })
      });

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
                            <p className="standardtext">Nome da atividade:</p>
                            <input 
                                type="text"
                                value={newName}
                                onChange = {(event) => {
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
                                    <a href="a">
                                        <img className="plus" src={iconPlus}/>
                                    </a>
                                    <div className="icon-dum">
                                        <a href="a">
                                            <img src={iconTrash} alt="lixeira deletar tarefa" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="input-timer-content">
                                <input 
                                    className="input-timer"
                                    placeholder="00"
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

/**/