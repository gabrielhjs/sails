import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Company } from "../../entities/Company"
import { Product } from "../../entities/Product"
import { ProductCategory } from "../../entities/ProductCategory"
import { OrmProduct } from "./Product"
import { OrmProductCategory } from "./ProductCategory"
import { OrmUser } from "./User"


@Entity("companies")
export class OrmCompany implements Company {
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

	@OneToMany(() => OrmProduct, product => product.company, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	products?: Product[]

	@OneToMany(() => OrmProductCategory, category => category.company, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	categories?: ProductCategory[]
}