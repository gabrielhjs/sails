import { Request } from "express"

import { ProductImage } from "../../entities/ProductImages"


export interface IProductImageRepository {
	findByQuery(request: Request): Promise<ProductImage[]>
	save(productImage: ProductImage): Promise<ProductImage>
}