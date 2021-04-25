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
exports.OrmProductStock = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let OrmProductStock = class OrmProductStock {
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], OrmProductStock.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProductStock.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProductStock.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column("integer"),
    __metadata("design:type", Number)
], OrmProductStock.prototype, "quantity", void 0);
__decorate([
    typeorm_1.OneToOne(() => Product_1.OrmProduct, product => product.stock),
    __metadata("design:type", Product_1.OrmProduct)
], OrmProductStock.prototype, "product", void 0);
OrmProductStock = __decorate([
    typeorm_1.Entity("product_stock")
], OrmProductStock);
exports.OrmProductStock = OrmProductStock;
