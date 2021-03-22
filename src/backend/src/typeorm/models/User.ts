import { Entity, PrimaryColumn, Column, ObjectIdColumn, ObjectID } from "typeorm"


@Entity("users")
export class OrmUser {
	@PrimaryColumn("uuid")
	id!: string

	@Column()
	name!: string

	@Column()
	email!: string

	@Column({ select: false })
	password!: string

	@Column("date")
	createdAt!: Date

	@Column("date")
	updatedAt!: Date
}