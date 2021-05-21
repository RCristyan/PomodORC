import './seeactivity.css';
import iconEdit from '../../assets/icon_edit.svg';
import iconTrash from '../../assets/icon_trash.png';
import iconPlus from '../../assets/icon_plus.svg';
import iconCrono from '../../assets/icon_crono.svg';
import iconPomo from '../../assets/icon_pomodoro_green.png';
import { useState, useEffect } from 'react';
import api from '../../services/api';

function SeeActivity() {

    const [hasTimer, setHasTimer] = useState(false);

    const [listTitle, setListTitle] = useState([]);
    const [activityName, setActivityName] = useState('');
    const [activityStatus, setActivityStatus] = useState(false);

    // const seeList = async (id:string) => {
    //     try {
    //         await api.get(`/readact/${id}`).then(res => {
    //             const list = res.data;
    //             setActivityName(list)
    //         };
    //         window.location.reload();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div className="seelist">
            <section className="seelistcontainer">
                <section className="section-title-icon">
                    {/* container do titulo */}
                    <div className="title-container">

                        <div className="standardtitle">
                            {/*<ListarTarefas items={listTitle} /> */}
                            Tarefa1
                        </div>
                        
                    </div>
                    {/* conteiner dos icones */}
                    <div className="icons-container">

                        {/* icone de edicao */}
                        <div className="container-edit-icon">
                            <a href="a"><img className="edit-icon" src={iconEdit} alt="Editar lista" /></a>
                        </div>
                        {/* icone de lixeira */}
                        <div className="container-dump-icon">
                            <a href="a"><img className="dump-icon" src={iconTrash} alt="Deletar lista" /></a>
                        </div>

                    </div>
                </section>
                <section className="section-description">

                    {/* descricao */}
                    <div className="description-container">
                        <p className="standard-description-title">Descrição</p>
                        <div className="standard-description">

                            Este é um exemplo de descricacao um tanto 
                            qunato longa para ajudar nos ajustes.
                            Este é um exemplo de descricacao um tanto 
                            qunato longa para ajudar nos ajustes.
                            Este é um exemplo de descricacao um tanto 
                            qunato longa para ajudar nos ajustes
                        </div>
                    </div>
                    
                </section>

                <section className="timer-container">
                    <div className="text-content">
                        <div className="title-timer">
                            <p>Timer</p>
                        </div>
                        <div className="title-plus-dump">
                            <button className="plusBtn" onClick={()=>setHasTimer(true)}>
                                <img className="plus" src={iconPlus}/>
                            </button>
                        </div>
                        <div className="icon-dum">
                            <button className="trashBtn" onClick={()=>setHasTimer(false)}>
                                <img src={iconTrash} alt="lixeira deletar tarefa" />
                            </button>
                        </div>
                    
                    </div>
                    {hasTimer && <div className="input-timer-content">
                        <input 
                            className="input-timer"
                            type="time" 
                        />
                    </div>}           
                </section>

                <div className="timerBtns">
                    <button className="cronoBtn">
                        <img className="img" src={iconCrono}/>
                    </button>

                    {hasTimer && <button className="pomoBtn">
                        <img className="img" src={iconPomo}/>
                    </button>}
                </div>
                
            </section>
        </div>
    )
}
export default SeeActivity;