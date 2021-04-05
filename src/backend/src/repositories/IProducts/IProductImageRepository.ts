import { ProductImage } from "../../entities/ProductImages";


export interface IProductImageRepository {
	find(productId: string): Promise<ProductImage[] | void>
	save(productStock: ProductImage): Promise<void>
}