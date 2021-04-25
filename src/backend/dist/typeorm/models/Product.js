"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmProduct = void 0;
const typeorm_1 = require("typeorm");
const ProductCategory_1 = require("../../entities/ProductCategory");
const Company_1 = require("./Company");
const ProductCategory_2 = require("./ProductCategory");
const ProductImages_1 = require("./ProductImages");
const ProductStock_1 = require("./ProductStock");
let OrmProduct = class OrmProduct {
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], OrmProduct.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProduct.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProduct.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrmProduct.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], OrmProduct.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Company_1.OrmCompany, company => company.products),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Company_1.OrmCompany)
], OrmProduct.prototype, "company", void 0);
__decorate([
    typeorm_1.OneToOne(() => ProductStock_1.OrmProductStock, stock => stock.product, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", ProductStock_1.OrmProductStock)
], OrmProduct.prototype, "stock", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ProductCategory_2.OrmProductCategory, category => category.products, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", ProductCategory_1.ProductCategory)
], OrmProduct.prototype, "category", void 0);
__decorate([
    typeorm_1.OneToMany(() => ProductImages_1.OrmProductImage, image => image.product),
    __metadata("design:type", Array)
], OrmProduct.prototype, "images", void 0);
OrmProduct = __decorate([
    typeorm_1.Entity("products")
], OrmProduct);
exports.OrmProduct = OrmProduct;
