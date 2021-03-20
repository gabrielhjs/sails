import { v4 as uuidv4 } from "uuid"

export class Product {
	public readonly id!: string
	public readonly createdAt!: Date
	public readonly updatedAt!: Date

	public name!: string

	constructor(props: Omit<Product, "id" | "createdAt" | "updatedAt">, id?: string) {
		Object.assign(this, props)

		if (!id) {
			this.id = uuidv4()
			this.createdAt = new Date(Date.now())
			this.updatedAt = this.createdAt
		}
		else {
			this.updatedAt = new Date(Date.now())
		}
	}
}