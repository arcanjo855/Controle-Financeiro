import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import { Transaction } from "./components/types/types"; 
import Grid from "./components/Grid";

const App: React.FC = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState<Transaction[]>(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState<string>("0");
  const [expense, setExpense] = useState<string>("0");
  const [total, setTotal] = useState<string>("0");

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(Number(income) - Number(expense)).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : "+"} R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction: Transaction) => {
    const newArrayTransaction = [...transactionsList, transaction];

    setTransactionsList(newArrayTransaction);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransaction));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <Grid itens={transactionsList} setItens={setTransactionsList} />
      <GlobalStyle />
    </>
  );
};

export default App;