import React from "react";
import * as C from "./styles";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";
import { GridItemProps } from "../types/types";


const GridItem: React.FC<GridItemProps> = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{`R$ ${(item.amount.toFixed(2))}`}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;