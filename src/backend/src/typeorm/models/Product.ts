import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { OrmProductStock } from "./ProductStock"


@Entity("products")
export class OrmProduct {
	@PrimaryColumn("uuid")
	id!: string

	@Column("date")
	createdAt!: Date

	@Column("date")
	updatedAt!: Date

	@Column()
	name!: string

	@OneToOne(type => OrmProductStock, { onDelete: "CASCADE" })
	@JoinColumn()
	productStock!: OrmProductStock
}