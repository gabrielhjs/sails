import { v4 as uuidv4 } from "uuid"

export class User {
	public readonly id!: string
	public readonly createdAt!: Date
	public updatedAt!: Date

	public name!: string
	public email!: string
	public password!: string

	constructor(props: Omit<User, "id" | "createdAt" | "updatedAt">, id?: string) {
		Object.assign(this, props)

		if (!id) {
			this.id = uuidv4()
			this.createdAt = new Date(Date.now())
		}
	}
}