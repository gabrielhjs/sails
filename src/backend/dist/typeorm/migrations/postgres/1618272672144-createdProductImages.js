"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createdProductImages1618272672144 = void 0;
class createdProductImages1618272672144 {
    constructor() {
        this.name = 'createdProductImages1618272672144';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "size" character varying NOT NULL, "url" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_7af50639264735c79e918af6089" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_7af50639264735c79e918af6089"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }
}
exports.createdProductImages1618272672144 = createdProductImages1618272672144;
