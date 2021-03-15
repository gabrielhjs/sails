import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity("users")
export class OrmUser {
	@PrimaryColumn("uuid")
	id!: string

	@Column()
	name!: string

	@Column()
	email!:string

	@Column()
	password!: string

	@Column("date")
	createdAt!: Date

	@Column("date")
	updatedAt!: Date
}