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
exports.OrmProductImage = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../../entities/Product");
const Product_2 = require("./Product");
let OrmProductImage = class OrmProductImage {
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], OrmProductImage.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProductImage.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProductImage.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrmProductImage.prototype, "size", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrmProductImage.prototype, "url", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Product_2.OrmProduct, product => product.images, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Product_1.Product)
], OrmProductImage.prototype, "product", void 0);
OrmProductImage = __decorate([
    typeorm_1.Entity("images")
], OrmProductImage);
exports.OrmProductImage = OrmProductImage;
