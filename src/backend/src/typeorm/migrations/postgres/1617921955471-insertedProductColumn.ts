import {MigrationInterface, QueryRunner} from "typeorm";

export class insertedProductColumn1617921955471 implements MigrationInterface {
    name = 'insertedProductColumn1617921955471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }

}
