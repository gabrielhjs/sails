import { User } from "../../entities/User"


export interface IUsersRepository {
	find(userId: string): Promise<User | void>
	findByEmail(email: string): Promise<User | void>
	findByQuery(query: object): Promise<User[]>
	save(user: User): Promise<string>
}