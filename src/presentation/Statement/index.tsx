import { ITransaction } from "../../domain/entities/ITransaction";
import { Transaction } from "../Transaction";
import { Container, Heading, MonthLabel, TransactionsList } from "./styles";

const groupTransactions = (transactions: ITransaction[]): Record<string, ITransaction[]> => {
    return transactions.reduce<Record<string, ITransaction[]>>((acc, transaction) => {
      const monthName = transaction.date.toLocaleString('pt-BR', { month: 'long' });
      const year = transaction.date.getFullYear();
      const key = `${monthName} ${year}`;
      
      if (!acc[key]) {
        acc[key] = [];
      }
      
      acc[key].push(transaction);
      return acc;
    }, {});
  };

interface StatementProps {
    allTransactions: ITransaction[]
}

export const Statement = ({ allTransactions }: StatementProps) => {
    const grouped = groupTransactions(allTransactions);
    
    return (
        <Container>
            <Heading>
                Extrato
            </Heading>
            <TransactionsList>
                {Object.entries(grouped).map(([monthYear, transactions]) => (
                    <div key={monthYear}>
                        <MonthLabel>{monthYear}</MonthLabel>
                        {transactions.map(transaction => (
                            <Transaction key={transaction.id} transaction={transaction} />
                        ))}
                    </div>
                ))}
            </TransactionsList>
        </Container>
    );
};