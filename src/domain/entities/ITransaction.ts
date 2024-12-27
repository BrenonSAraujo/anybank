import { ITransactionType } from "./ITransactionType"

export interface ITransaction {
    id: number
    value: number
    type: ITransactionType
    date: Date
}