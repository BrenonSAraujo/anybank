import { ITransaction } from "../entities/ITransaction"

export interface ITransactionRepository {
    create(value: number, typeId: number, userId: string): Promise<void>
    listAll(): Promise<ITransaction[]>
}