/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
function ListarTarefas({ item }: any) {
  return (
    <>
      {item.map((item: any, index: any) => {
        return (
            <div>{item.title}</div>
        );
      })}
    </>
  );
}
export default ListarTarefas;
