import './seelist.css';
import iconEdit from '../../assets/icon_edit.svg';
import iconDump from '../../assets/icon_trash.png';
import iconPlus from '../../assets/icon_plus.svg';
import { useState, useEffect } from 'react';
import {useNotification} from "../createactivity/Activity"

function Activity() {

    const [listTitle, setListTitle] = useState([]);
    const [activityName, setActivityName] = useState('');
    const [activityStatus, setActivityStatus] = useState(false);


    const dispatch = useNotification();
  
    function handleActivityUpdate(){
        dispatch({
            id: "id",
            name: {activityName},
            listName: {listTitle},
            time: "activityTime",
            status: {activityStatus}
        })
    }

    return (
        <div className="seelist">
            <section className="seelistcontainer">
                <section className="section-title-icon">
                    {/* container do titulo */}
                    <div className="title-container">

                        <div className="standardtitle">
                            {/*<ListarTarefas items={listTitle} /> */}
                            Lista1
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
                            <a href="a"><img className="dump-icon" src={iconDump} alt="Deletar lista" /></a>
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

                <section className="lista-tarefas-container">
                    <div className="container-tarefas">
                        {/* titulo tarefas */}
                        <div className="standard-tarefas">Tarefas</div>
                        {/* lista de tarefas */}
                        <div className="listagem">
                            
                        </div>
                    </div>
                    {/* plus icon de adicionar tarefas */}

                    <a href="/criartarefa">
                        <img className="plus" src={iconPlus}/>
                    </a>
                </section>
                <div className="save_conteiner">
                    <a href="/"><button type="button" className="savebutom" >Salvar</button></a>
                </div>
            </section>
        </div>
    )
}
export default Activity;