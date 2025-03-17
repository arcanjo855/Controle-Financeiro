import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { GridProps } from "../types/types";
import { useGetTransactionList } from "../../hooks/useGetTransactionList";



const Grid: React.FC<GridProps> = ({ itens, setItens }) => {
  const {data,loading} =useGetTransactionList();

  const onDelete = (ID: number): void => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transations", JSON.stringify(newArray));
  };

  if (loading) {
    return <h1>Carregando</h1>
  }

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
        {data?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;