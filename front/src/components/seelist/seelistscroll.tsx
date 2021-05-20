/* eslint-disable jsx-a11y/alt-text */
import './seelist.css';
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
              <div className="tarefas">
                <p>{item.title}</p>
              </div>

            </>
          );
        })}
      </div>
    </>
  );
}
export default ListarTarefas;
