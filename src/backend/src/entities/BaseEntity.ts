import { v4 as uuidv4 } from "uuid"

export class BaseEntity {
	public readonly id!: string
	public readonly createdAt!: Date
	public readonly updatedAt!: Date

	constructor(props: Omit<BaseEntity, "id" | "createdAt" | "updatedAt">, id?: string) {
		Object.assign(this, props)
		if (!id) {
			this.id = uuidv4()
			this.createdAt = new Date()
			this.updatedAt = this.createdAt
		}
		else {
			this.updatedAt = new Date()
		}
	}
}