import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Company } from "../../entities/Company"
import { Product } from "../../entities/Product"
import { OrmCompany } from "./Company"
import { OrmProduct } from "./Product"


@Entity("categories")
export class OrmProductCategory {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date

	@Column()
	name!: string

	@Column({ nullable: true })
	description?: string

	@ManyToOne(() => OrmCompany, company => company.products)
	@JoinColumn()
	company!: Company

	@OneToMany(() => OrmProduct, product => product.category)
	products?: Product[]
}