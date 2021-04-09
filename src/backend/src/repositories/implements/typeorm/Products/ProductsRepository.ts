import dotenv from "dotenv"
import { Request } from "express"
import { getRepository } from "typeorm"
import { QueryBuilder } from "typeorm-express-query-builder"
import { Product } from "../../../../entities/Product"
import { ProductStock } from "../../../../entities/ProductStock"
import { OrmProduct } from "../../../../typeorm/models/Product"
import { IProductRepository } from "../../../IProducts/IProductRepository"


dotenv.config()


export class TypeormProductRepository implements IProductRepository {
	async save(product: Product): Promise<Product> {
		const productRepository = getRepository(OrmProduct, process.env.NODE_ENV)
		const newProduct = productRepository.create(product)

		return await productRepository.save(newProduct)
	}

	async find(productId: string): Promise<Product | void> {
		const repository = getRepository(OrmProduct, process.env.NODE_ENV)
		const product = await repository.findOne({ where: { id: productId }, relations: ["stock"] })

		if (product === undefined) { return }
		return product
	}

	async findByQuery(request: Request): Promise<OrmProduct[]> {
		const repository = getRepository(OrmProduct, process.env.NODE_ENV)
		const query = new QueryBuilder(request.query).build()
		query.relations = ["stock"]
		return await repository.find(query)
	}
}