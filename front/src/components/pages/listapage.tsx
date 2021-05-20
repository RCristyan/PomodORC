import iconEdit from '../../assets/icon_edit.svg';
import iconDump from '../../assets/icon_trash.png';
import iconPlus from '../../assets/icon_plus.svg';
import { useState, useEffect } from 'react';
import './infopages.css';


///edit button
/*<div className="container-edit-icon">
        <a href="a">
            <img className="edit-icon" src={iconEdit} alt="Editar lista" />
        </a>
    </div>*/

///trash button
/*<div className="container-dump-icon">
        <a href="a">
            <img className="dump-icon" src={iconDump} alt="Deletar lista" />
        </a>
     </div>*/

///save button
/*<div className="save_conteiner">
      <a href="/">
        <button
            type="submit"
            className="savebutom"
            onClick={() => { newList(newTitle, newBody) }}
        >
            Salvar
        </button>
      </a>
  </div>*/

///add tarefa
/*<a href="/criartarefa">
        <img className="plus" src={iconPlus}/>
    </a> */

///Nome
/*<div className="standardtitle">
        {<ListarTarefas items={listTitle} />}
        Lista1
    </div> */

///InputNome
/*<input
        type="text"
        className="title_input"
        placeholder="Insira um título para a lista"
        value={newTitle}
        onChange={(event) => {
            setNewTitle(event.target.value)
        }}
    /> */

///"Descricao"
///<p className="standard-description-title">Descrição</p>

///Descricao
/*<div className="standard-description">

        Este é um exemplo de descricacao um tanto 
        qunato longa para ajudar nos ajustes.
        Este é um exemplo de descricacao um tanto 
        qunato longa para ajudar nos ajustes.
        Este é um exemplo de descricacao um tanto 
        qunato longa para ajudar nos ajustes
    </div> */

///InputDescricao
/*<input
        className="description_input"
        placeholder="Insira uma descrição para a lista"
        value={newBody}
        onChange={(event) => {
            setNewBody(event.target.value);
        }}
    /> */

///Tarefas
///<div className="standard-tarefas">Tarefas</div>

///listaDeTarefas




function ListPage() {

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
        <div className="list">
            <section className="infoContainer">
                
                    <div>oi</div>
            </section>
        </div>
    )
}
export default ListPage;