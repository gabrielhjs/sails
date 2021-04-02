import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm"
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

	@OneToOne(() => OrmProductStock, stock => stock.product, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	stock!: OrmProductStock
}