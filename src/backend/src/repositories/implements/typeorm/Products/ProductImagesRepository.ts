import dotenv from "dotenv"
import { Request } from "express"
import { getRepository } from "typeorm"
import { QueryBuilder } from "typeorm-express-query-builder"
import { ProductImage } from "../../../../entities/ProductImages"
import { OrmProductImage } from "../../../../typeorm/models/ProductImages"
import { IProductImageRepository } from "../../../IProducts/IProductImageRepository"


dotenv.config()


export class TypeormProductImageRepository implements IProductImageRepository {
	async save(productImage: ProductImage): Promise<ProductImage> {
		const repository = getRepository(OrmProductImage, process.env.NODE_ENV)
		const newProductImage = repository.create(productImage)

		return await repository.save(newProductImage)
	}

	async findByQuery(request: Request): Promise<ProductImage[]> {
		const repository = getRepository(OrmProductImage, process.env.NODE_ENV)
		const query = new QueryBuilder(request.query).build()
		query.relations = ["product"]

		return await repository.find(query)
	}
}