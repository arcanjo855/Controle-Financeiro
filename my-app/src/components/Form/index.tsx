import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";
import { FormProps, Transaction } from "../types/types"; 



const Form: React.FC<FormProps> = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isExpensive, setExpense] = useState<boolean>(false);

  const generateID = (): number => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Favor informe a descricao e o valor");
      return;
    } else if (Number(amount) < 1) {
      alert("O valor tem que ser positivo");
      return;
    }

    const transaction: Transaction = {
      id: generateID(),
      desc: desc, 
      amount: Number(amount),
      expense: isExpensive,
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.label>Descricao</C.label>
          <C.Input 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.label>Valor</C.label>
          <C.Input 
            value={amount}
            type="number" 
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="grup1"
            onChange={() => setExpense(!isExpensive)}
          />
          <C.label htmlFor="rIncome">Entrada</C.label>
          <C.Input
            type="radio"
            id="rExpensive"
            name="grup1"
            onChange={() => setExpense(!isExpensive)}
          />
          <C.label htmlFor="rExpensive">Saida</C.label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;