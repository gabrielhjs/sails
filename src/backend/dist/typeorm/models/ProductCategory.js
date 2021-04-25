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
exports.OrmProductCategory = void 0;
const typeorm_1 = require("typeorm");
const Company_1 = require("../../entities/Company");
const Company_2 = require("./Company");
const Product_1 = require("./Product");
let OrmProductCategory = class OrmProductCategory {
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], OrmProductCategory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProductCategory.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmProductCategory.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrmProductCategory.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], OrmProductCategory.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Company_2.OrmCompany, company => company.products),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Company_1.Company)
], OrmProductCategory.prototype, "company", void 0);
__decorate([
    typeorm_1.OneToMany(() => Product_1.OrmProduct, product => product.category),
    __metadata("design:type", Array)
], OrmProductCategory.prototype, "products", void 0);
OrmProductCategory = __decorate([
    typeorm_1.Entity("categories")
], OrmProductCategory);
exports.OrmProductCategory = OrmProductCategory;
