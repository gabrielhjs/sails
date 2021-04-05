import { getRepository } from "typeorm"
import { OrmProductStock } from "../../../../typeorm/models/ProductStock"
import { IProductStockRepository } from "../../../IProducts/IProductStockRepository"
import dotenv from "dotenv"
import { ProductStock } from "../../../../entities/ProductStock"
import { OrmProduct } from "../../../../typeorm/models/Product"


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

	async addAmount(productStock: ProductStock, amount: number): Promise<number> {
		const productStockRepository = getRepository(OrmProductStock, process.env.NODE_ENV)

		productStock.quantity += amount
		await productStockRepository.save(new ProductStock(productStock, productStock.id))

		return productStock.quantity
	}

	async subAmount(productStock: ProductStock, amount: number): Promise<number> {
		const repository = getRepository(OrmProductStock, process.env.NODE_ENV)

		if ((productStock.quantity - amount) < 0) {
			throw new Error("This quantity of product is not available in stock.")
		}

		productStock.quantity -= amount
		await repository.save(new ProductStock(productStock, productStock.id))

		return productStock.quantity
	}
}