import styled from "styled-components"
import { Sidebar } from "../presentation/Sidebar"
import { TransactionForm } from "../presentation/TransactionForm"
import { Statement } from "../presentation/Statement"
import { Account } from "../presentation/Account"
import { useEffect, useState } from "react"
import { ITransaction } from "../domain/entities/ITransaction"
import { ListAllTransactions } from "../domain/useCases/ListAllTransactions"
import { TransactionSupabaseRepository } from "../infra/supabase/TransactionSupabaseRepository"

const Main = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 34px;
`

const listTransactions = new ListAllTransactions(new TransactionSupabaseRepository())

const Home = () => {

  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    listTransactions.execute()
      .then(data => setTransactions(data))
  }, [])

  return (
    <>
      <Sidebar />
      <Main>
        <Account />
        <TransactionForm />
      </Main>
      <div>
        <Statement allTransactions={transactions} />
      </div>
    </>
  )
}

export default Home
