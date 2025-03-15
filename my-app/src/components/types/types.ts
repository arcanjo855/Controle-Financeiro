export interface Transaction {
  id: number;
  desc: string;
  amount: number;
  expense: boolean;
}

export interface ResumeProps {
    expense: string | number;
    income: string | number;
    total: string | number;
}

