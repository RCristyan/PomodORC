import react from 'react';
import './seelist.css';
import {Seelistdata} from '../seelist/seelistdata';
import ListarTarefas from './seelistmen';
import iconEdit from '../../assets/icon_edit.svg';
import iconDump from '../../assets/icon_dump.png';

function Seelist(props:any){
    const {
        title
    } = props;

    return(
        <div className="seelist">
            <section className="seelistcontainer">
                <div className="title-lista">
                    {title}
                </div>
                <div className="icons">
                    <a href=""><img src={iconEdit} alt="Editar lista" /></a>
                    <a href=""><img src={iconDump} alt="Deletar lista" /></a>
                </div>
                {/* menu de tarefas */}
                <ListarTarefas item={Seelistdata}/>
            </section>
        </div>
    )
}
export default Seelist;