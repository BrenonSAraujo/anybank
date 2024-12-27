import { ITransactionTypeRepository } from "../../domain/repositores/ITransactionTypeRepository";
import { supabase } from "./config";

export class TransactionTypeSupabaseRepository implements ITransactionTypeRepository {
    async listAll() {
        const { data, error } = await supabase
            .from('transaction_type')
            .select('*')

            if (error) {
                throw error
            }

            return data || []
    }


}