import { ITransactionType } from "../entities/ITransactionType";

export interface ITransactionTypeRepository {
    listAll: () => Promise<ITransactionType[]>
}