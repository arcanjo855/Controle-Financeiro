import { useState } from "react";
import { Transaction } from "../components/types/types";

interface GetTransactionListHook {
  data: Transaction[];
  loading: boolean;
}

export const useGetTransactionList = (): GetTransactionListHook => {
  const data = localStorage.getItem("transactions");
  const [transactionsList] = useState<Transaction[]>(
    data ? JSON.parse(data) : []
  );

  return { data: transactionsList, loading: false };
};
