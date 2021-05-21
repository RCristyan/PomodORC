import './seelist.css';
import iconEdit from '../../assets/icon_edit.svg';
import iconDump from '../../assets/icon_trash.png';
import iconPlus from '../../assets/icon_plus.svg';
import api from '../../services/api';
import { useState, useEffect} from 'react';


function Seelist(title:any, id:any) {

    const [listName, setListName] = useState(title.title)
    const [listBody, setListBody] = useState(title.body)
    const [nameAct, setNameAct] = useState()

    useEffect(() => {
        api.get(`/readone/${title.id}`).then(res =>{
            const list = res.data
            setListBody(list.body)
        })
    })
//     useEffect(() => {
//         api.get(`/readact/${title.id}`).then(res =>{
//             const list2 = res.data
//             setNameAct(list2)
//         })
//     })

// console.log(nameAct)
    return (
        <div className="seelist">
            <section className="seelistcontainer">
                <section className="section-title-icon">
                    {/* container do titulo */}
                    <div className="title-container">

                        <div className="standardtitle">
                            {/* aqui vem o nome {listName} */}
                            {listName}
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
                            {listBody}
                        </div>
                    </div>
                    
                </section>

                <section className="lista-tarefas-container">
                    <div className="container-tarefas">
                        {/* titulo tarefas */}  
                        <div className="standard-tarefas">Tarefas</div>
                        {/* lista de tarefas */}
                        <div className="listagem">
                            lalal
                        </div>
                    </div>
                    {/* plus icon de adicionar tarefas */}

                    <a href={`/criartarefa/${title.id}`}>
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
export default Seelist;