import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1616202737569 implements MigrationInterface {
    name = 'CreateTables1616202737569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_stock" ("id" uuid NOT NULL, "createdAt" date NOT NULL, "updatedAt" date NOT NULL, "quantity" integer NOT NULL, "productId" uuid, CONSTRAINT "REL_6d782c52c11043659e1182b33d" UNIQUE ("productId"), CONSTRAINT "PK_557112c9955555e7d08fa913f3f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL, "createdAt" date NOT NULL, "updatedAt" date NOT NULL, "name" character varying NOT NULL, "productStockId" uuid, CONSTRAINT "REL_13ad89ca0c7b6b25dd7d0c8399" UNIQUE ("productStockId"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" date NOT NULL, "updatedAt" date NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_stock" ADD CONSTRAINT "FK_6d782c52c11043659e1182b33db" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_13ad89ca0c7b6b25dd7d0c83993" FOREIGN KEY ("productStockId") REFERENCES "product_stock"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_13ad89ca0c7b6b25dd7d0c83993"`);
        await queryRunner.query(`ALTER TABLE "product_stock" DROP CONSTRAINT "FK_6d782c52c11043659e1182b33db"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product_stock"`);
    }

}
