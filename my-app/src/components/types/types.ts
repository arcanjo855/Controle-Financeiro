import { IconType } from "react-icons";

export interface Transaction {
  id: number;
  desc: string;
  amount: number;
  expense: boolean;
}

export interface FormProps {
  handleAdd: (transaction: Transaction) => void;
  transactionsList: Transaction[];
  setTransactionsList: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

export interface ResumeProps {
    expense: string | number;
    income: string | number;
    total: string | number;
}

export interface ResumeItemProps {
    title: string;
    Icon: IconType;
    value: string | number;
}


export interface GridItemProps {
  item: {
    id: number;
    desc: string;
    amount: number;
    expense: boolean;
  };
  onDelete: (id: number) => void;
}

export interface GridProps {
  itens: {
    id: number;
    desc: string;
    amount: number;
    expense: boolean;
  }[];
  setItens: React.Dispatch<React.SetStateAction<any[]>>;
}