/* eslint-disable jsx-a11y/alt-text */
import './seelist.css';
import icon from '../../assets/icon_arrow3.png';


function ListarTarefas({ item }: any) {
  return (
    <>
      <div className="content-tarefas">
        {item.map((item: any, index: any) => {
          return (
              <>
                <div className="arrow">
                  <img className="arrow-img" src={icon} alt="" />
                </div>
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
