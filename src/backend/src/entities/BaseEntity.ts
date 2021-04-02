import { v4 as uuidv4 } from "uuid"

export class BaseEntity {
	readonly id!: string
	readonly createdAt!: Date
	readonly updatedAt!: Date

	constructor(props: BaseEntity, id?: string) {
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