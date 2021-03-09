import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class GenericUsersRepository implements IUsersRepository {
	private users: User[] = []

	async findByEmail(email: string): Promise<User> {
		const user = this.users.find(user => user.email === email)

		if (user === undefined) {
			throw new Error("User not found.")
		}
		else {
			return user
		}
	}

	async save(user: User): Promise<void> {
		this.users.push(user)
	}
}