import { User } from "../../entities/User"


export interface IUsersRepository {
	findByEmail(email: string): Promise<User | void>
	findByQuery(query: object): Promise<User[]>
	save(user: User): Promise<void>
}