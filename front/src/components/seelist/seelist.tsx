import react from 'react';
import './seelist.css';
import {Seelistdata} from '../seelist/seelistdata';
import ListarTarefas from './seelistscroll';
import iconEdit from '../../assets/icon_edit.svg';
import iconDump from '../../assets/icon_dump.png';

function Seelist(props:any){
    const {
        title
    } = props;

    return(
        <div className="seelist">
            <section className="seelistcontainer">
                        <section className="section-title-icon">
                            {/* container do titulo */}
                            <div className="title-container">
                                <div className="standardtitle">{title}</div>
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
                                <h1>Descricao</h1>
                                <p>titulo referente p/ Descricao</p>
                            </div>
                        </section>



                {/* menu de tarefas */}
                {/* <ListarTarefas item={Seelistdata}/> */}
            </section>
        </div>
    )
}
export default Seelist;