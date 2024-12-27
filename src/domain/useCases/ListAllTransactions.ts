import { ITransactionRepository } from "../repositores/ITransactionRepository";

export class ListAllTransactions {
    constructor(private repository: ITransactionRepository) {}

    execute () {
        return this.repository.listAll()
    }
}