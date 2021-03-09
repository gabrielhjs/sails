import { uuid } from "uuidv4"

export class User {
	public readonly id!: string
	public readonly createdAt!: Date
	public updatedAt!: Date

	public name!: string
	public email!: string
	public password!: string

	constructor(props: Omit<User, "id" | "createdAt">, id?: string) {
		Object.assign(this, props)

		if (!id) {
			this.id = uuid()
			this.createdAt = new Date(Date.now())
		}
	}
}