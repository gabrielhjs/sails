import { ProductStock } from "../../entities/ProductStock";


export interface IProductStockRepository {
	find(productId: string): Promise<ProductStock | void>
	save(productStock: ProductStock): Promise<void>
	addAmount(productStock: ProductStock, amount: number): Promise<number>
	subAmount(productStock: ProductStock, amount: number): Promise<number>
}