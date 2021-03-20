import { User } from "../../entities/User";

export interface IUsersRepository {
	findByEmail(email: string): Promise<User | void>
	save(user: User): Promise<void>
}