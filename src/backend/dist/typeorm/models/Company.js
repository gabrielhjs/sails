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
exports.OrmCompany = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
const ProductCategory_1 = require("./ProductCategory");
const User_1 = require("./User");
let OrmCompany = class OrmCompany {
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], OrmCompany.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmCompany.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], OrmCompany.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrmCompany.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.OrmUser, user => user.companies),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.OrmUser)
], OrmCompany.prototype, "owner", void 0);
__decorate([
    typeorm_1.OneToMany(() => Product_1.OrmProduct, product => product.company, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true
    }),
    __metadata("design:type", Array)
], OrmCompany.prototype, "products", void 0);
__decorate([
    typeorm_1.OneToMany(() => ProductCategory_1.OrmProductCategory, category => category.company, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true
    }),
    __metadata("design:type", Array)
], OrmCompany.prototype, "categories", void 0);
OrmCompany = __decorate([
    typeorm_1.Entity("companies")
], OrmCompany);
exports.OrmCompany = OrmCompany;
