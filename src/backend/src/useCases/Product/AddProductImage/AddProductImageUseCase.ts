import { IAddProductImageRequestDTO } from "./AddProductImageDTO"
import sharp from "sharp"
import { IProductImageRepository } from "../../../repositories/IProducts/IProductImageRepository"
import { IProductRepository } from "../../../repositories/IProducts/IProductRepository"
import { ProductImage } from "../../../entities/ProductImages"
import { UseCase } from "../../IUseCase"


export class AddProductImageUseCase implements UseCase {
	constructor(
		private productImageRepository: IProductImageRepository,
		private productRepository: IProductRepository
	) { }

	async execute(data: IAddProductImageRequestDTO): Promise<void> {
		const product = await this.productRepository.find(data.productId)

		if (product === undefined) { throw new Error("Invalid product Id") }

		const thumbnailImageName = "temp/products/images/" + data.productId + "-thumbnail.png"
		sharp("temp/products/images/" + data.url).resize(
			200, 200, {
			fit: "inside",
			position: "right top",
		})
			.toFormat("png", { quality: 100 })
			.toFile(thumbnailImageName)

		await this.productImageRepository.save(new ProductImage({
			product: product,
			url: thumbnailImageName,
			size: "thumbnail"
		}))

		const smallImageName = "temp/products/images/" + data.productId + "-small.png"
		sharp("temp/products/images/" + data.url).resize(
			400, 400, {
			fit: "inside",
			position: "right top",
		})
			.toFormat("png", { quality: 100 })
			.toFile(smallImageName)

		await this.productImageRepository.save(new ProductImage({
			product: product,
			url: smallImageName,
			size: "small"
		}))

		const originalImageName = "temp/products/images/" + data.productId + ".png"
		sharp("temp/products/images/" + data.url)
			.toFormat("png", { quality: 100 })

		await this.productImageRepository.save(new ProductImage({
			product: product,
			url: originalImageName,
			size: "original"
		}))
	}
}