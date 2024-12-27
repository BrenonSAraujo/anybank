import { ITransactionTypeRepository } from "../repositores/ITransactionTypeRepository";

export class ListTransactionType {
    constructor(private repository: ITransactionTypeRepository) {}

    async execute() {
        return this.repository.listAll()
    }
}