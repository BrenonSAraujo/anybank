import { IUser } from "../entities/IUser";
import { IUserRepository } from "../repositores/IUserRepository";

export class CreateUser {
    constructor (private userRepository: IUserRepository) {}
    async execute(user: Omit<IUser, 'id'>) {
        this.userRepository.createUser(user)
    }
}