import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { GridProps } from "../types/types";



const Grid: React.FC<GridProps> = ({ itens, setItens }) => {
  const onDelete = (ID: number): void => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transations", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descricao</C.Th>
          <C.Th width={40}>valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;