import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Product } from "../../entities/Product"
import { OrmProduct } from "./Product"
import { OrmUser } from "./User"


@Entity("companies")
export class OrmCompany {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date

	@Column()
	name!: string

	@ManyToOne(() => OrmUser, user => user.companies)
	@JoinColumn()
	owner!: OrmUser

	@OneToMany(() => OrmProduct, products => products.company, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	products?: Product[]
}