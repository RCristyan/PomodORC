import './seelist.css';
import iconEdit from '../../assets/icon_edit.svg';
import iconDump from '../../assets/icon_dump.png';

function Seelist(props: any) {
    const {
        title
    } = props;

    return (
        <div className="seelist">
            <section className="seelistcontainer">
                <div className="all-container">
                    <div className="title-container">
                        <div className="standardtitle">{title}</div>
                    </div>
                    <div className="icons-container">
                        <div>
                            <a href=""><img className="edit-icon" src={iconEdit} alt="Editar lista" /></a>
                        </div>
                        <div>
                            <a href=""><img className="dump-icon" src={iconDump} alt="Deletar lista" /></a>
                        </div>
                    </div>
                    <div className="description-container">
                        <h1>Descricao</h1>
                        <p>titulo referente p/ Descricao</p>
                    </div>
                </div>
                {/* menu de tarefas */}
                {/* <ListarTarefas item={Seelistdata}/> */}
            </section>
        </div>
    )
}
export default Seelist;