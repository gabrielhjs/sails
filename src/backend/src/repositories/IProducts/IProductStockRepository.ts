import { ProductStock } from "../../entities/ProductStock";


export interface IProductStockRepository {
	find(productId: string): Promise<ProductStock | void>
	save(productStock: ProductStock): Promise<void>
	addAmount(productId: string, quantity: number): Promise<ProductStock>
	subtractAmount(productId: string, quantity: number): Promise<ProductStock>
}