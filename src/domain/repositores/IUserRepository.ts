import { IUser } from "../entities/IUser";

export interface IUserRepository {
    createUser(user: Omit<IUser, 'id'>) : Promise<void>
}