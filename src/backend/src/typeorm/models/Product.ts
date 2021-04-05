import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { OrmCompany } from "./Company"
import { OrmProductStock } from "./ProductStock"


@Entity("products")
export class OrmProduct {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date

	@Column()
	name!: string

	@ManyToOne(() => OrmCompany, company => company.products)
	@JoinColumn()
	company!: OrmCompany

	@OneToOne(() => OrmProductStock, stock => stock.product, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	@JoinColumn()
	stock!: OrmProductStock
}