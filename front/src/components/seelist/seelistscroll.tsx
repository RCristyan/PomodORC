/* eslint-disable jsx-a11y/alt-text */
import './seelist.css';
import icon from '../../assets/icon_arrow3.png';

function ListarTarefas({ item }: any) {
  return (
    <>
      {item.map((item: any, index: any) => {
        return (
            <div className="content-tarefas">
              <div className="arrow">
                <img className="arrow-img" src={icon} alt="" />
              </div>
              <div className="tarefas">
                <p>{item.title1}</p>
                <p>{item.title2}</p>
                <p>{item.title3}</p>
              </div>
            </div>
        );
      })}
    </>
  );
}
export default ListarTarefas;
