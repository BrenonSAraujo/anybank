import { ITransaction } from "../../domain/entities/ITransaction";
import { ITransactionRepository } from "../../domain/repositores/ITransactionRepository";
import { supabase } from "./config";

export class TransactionSupabaseRepository implements ITransactionRepository {

    async listAll(): Promise<ITransaction[]> {

        const { data, error } = await supabase
            .from('transaction')
            .select(`
                *,
                transaction_type (id, display)
            `)

        if (error) {
            throw error;
        }

        if (!data) {
            return []
        }

        const result: ITransaction[] = data.map(row => {
            if (!row.transaction_type) {
                throw Error('Transação sem tipo encontrada!')
            }
            return {
                date: new Date(row.created_at),
                value: row.value,
                type: row.transaction_type,
                id: row.id
            }
        })

        return result

    }

    async create(value: number, typeId: number, userId: string) {

        const { error } = await supabase
            .from('transaction')
            .insert([
                {
                    transaction_type_id: typeId,
                    value,
                    user_id: userId
                },
            ])
            .select()

        if (error) {
            throw error;
        }

    }

}