import './seelist.css';
import iconEdit from '../../assets/icon_edit.svg';
import iconDump from '../../assets/icon_dump.png';
import ListarTarefas from './seelistscroll';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Seelist() {

    const [listTitle, setListTitle] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:5000/api/read`).then(res => {
            const list = res.data;
            setListTitle(list);
        })
    })


    return (
        <div className="seelist">
            <section className="seelistcontainer">
                <section className="section-title-icon">
                    {/* container do titulo */}
                    <div className="title-container">
                        <div className="standardtitle">
                            <ListarTarefas items={listTitle} />
                        </div>
                    </div>
                    {/* conteiner dos icones */}
                    <div className="icons-container">
                        {/* icone de edicao */}
                        <div className="container-edit-icon">
                            <a href=""><img className="edit-icon" src={iconEdit} alt="Editar lista" /></a>
                        </div>
                        {/* icone de lixeira */}
                        <div className="container-dump-icon">
                            <a href=""><img className="dump-icon" src={iconDump} alt="Deletar lista" /></a>
                        </div>
                    </div>
                </section>
                <section className="section-description">
                    {/* descricao */}
                    <div className="description-container">
                        <p className="standard-description">Descrição</p>
                    </div>
                </section>

                <section className="lista-tarefas-container">
                    <div className="container-tarefas">
                        {/* titulo tarefas */}
                        <div className="standard-tarefas">Tarefas</div>
                        {/* lista de tarefas */}
                        <div className="listagem">
                            Tarefinahs
                        </div>
                    </div>
                    {/* plus icon de adicionar tarefas */}
                    <div className="plus">
                        <a href="/criartarefa"><p>+</p></a>
                    </div>
                </section>
                <div className="save_conteiner">
                    <a href="/"><button type="button" className="savebutom" >Salvar</button></a>
                </div>
            </section>
        </div>
    )
}
export default Seelist;