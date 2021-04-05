import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { OrmCompany } from "./Company"


@Entity("users")
export class OrmUser {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date

	@Column()
	name!: string

	@Column()
	email!: string

	@Column({ select: false })
	password!: string

	@OneToMany(() => OrmCompany, company => company.owner, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	companies!: OrmCompany[]
}