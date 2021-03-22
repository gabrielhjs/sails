import { getRepository } from "typeorm"
import { OrmProductStock } from "../../../../typeorm/models/ProductStock"
import { IProductStockRepository } from "../../../IProducts/IProductStockRepository"
import dotenv from "dotenv"
import { ProductStock } from "../../../../entities/ProductStock"


dotenv.config()


export class TypeormProductStockRepository implements IProductStockRepository {
	async save(productStock: ProductStock): Promise<void> {
		const repository = getRepository(OrmProductStock, process.env.NODE_ENV)
		const newProductStock = repository.create(productStock)
		await repository.save(newProductStock)
	}

	async find(productId: string): Promise<ProductStock | void> {
		const repository = getRepository(OrmProductStock, process.env.NODE_ENV)
		const productStock = await repository.findOne({ where: { product: productId } })

		if (productStock === undefined) {
			return
		}
		else {
			return new ProductStock(productStock)
		}
	}

	async addAmount(productId: string, quantity: number): Promise<ProductStock> {
		const repository = getRepository(OrmProductStock, process.env.NODE_ENV)
		const productStock = await repository.findOne({ where: { product: productId } })

		if (productStock === undefined) {
			throw new Error("Product don't exists.")
		}
		else {
			productStock.quantity += quantity
			await repository.save(productStock)

			return new ProductStock(productStock)
		}
	}
	async subtractAmount(productId: string, quantity: number): Promise<ProductStock> {
		const repository = getRepository(OrmProductStock, process.env.NODE_ENV)
		const productStock = await repository.findOne({ where: { product: productId } })

		if (productStock === undefined) {
			throw new Error("Product don't exists.")
		}
		else {
			if ((productStock.quantity - quantity) < 0) {
				throw new Error("This quantity of product is not available in stock.")
			}
			else {
				productStock.quantity -= quantity
				await repository.save(productStock)

				return new ProductStock(productStock)
			}
		}
	}
}