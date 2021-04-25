"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductImageUseCase = void 0;
const sharp_1 = __importDefault(require("sharp"));
const ProductImages_1 = require("../../../entities/ProductImages");
class AddProductImageUseCase {
    constructor(productImageRepository, productRepository) {
        this.productImageRepository = productImageRepository;
        this.productRepository = productRepository;
    }
    async execute(data) {
        const product = await this.productRepository.find(data.productId);
        if (product === undefined) {
            throw new Error("Invalid product Id");
        }
        const thumbnailImageName = "temp/products/images/" + data.productId + "-thumbnail.png";
        sharp_1.default("temp/products/images/" + data.url).resize(200, 200, {
            fit: "inside",
            position: "right top",
        })
            .toFormat("png", { quality: 100 })
            .toFile(thumbnailImageName);
        await this.productImageRepository.save(new ProductImages_1.ProductImage({
            product: product,
            url: thumbnailImageName,
            size: "thumbnail"
        }));
        const smallImageName = "temp/products/images/" + data.productId + "-small.png";
        sharp_1.default("temp/products/images/" + data.url).resize(400, 400, {
            fit: "inside",
            position: "right top",
        })
            .toFormat("png", { quality: 100 })
            .toFile(smallImageName);
        await this.productImageRepository.save(new ProductImages_1.ProductImage({
            product: product,
            url: smallImageName,
            size: "small"
        }));
        const originalImageName = "temp/products/images/" + data.productId + ".png";
        sharp_1.default("temp/products/images/" + data.url)
            .toFormat("png", { quality: 100 });
        await this.productImageRepository.save(new ProductImages_1.ProductImage({
            product: product,
            url: originalImageName,
            size: "original"
        }));
    }
}
exports.AddProductImageUseCase = AddProductImageUseCase;
