/* eslint-disable jsx-a11y/alt-text */
import './seelist.css';
import icon from '../../assets/icon_arrow.svg';
interface tarefasProps {
  items: Array<any>;
}

function ListarTarefas({ items }: tarefasProps) {
  return (
    <>
      <div className="content-tarefas">
        {items.map((item: any, index: any) => {
          return (
            <>
              <div className="tarefa">
                <img className="tarefa-icon" src={icon} alt="icon"/>
                <p className="tarefa-title">{item.title}</p>
              </div>

            </>
          );
        })}
      </div>
    </>
  );
}
export default ListarTarefas;
