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

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date
}