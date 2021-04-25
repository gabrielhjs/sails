import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { User } from "../../entities/User"
import { OrmCompany } from "./Company"


@Entity("users")
export class OrmUser implements User {
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