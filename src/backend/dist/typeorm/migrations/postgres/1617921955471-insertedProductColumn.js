"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertedProductColumn1617921955471 = void 0;
class insertedProductColumn1617921955471 {
    constructor() {
        this.name = 'insertedProductColumn1617921955471';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }
}
exports.insertedProductColumn1617921955471 = insertedProductColumn1617921955471;
