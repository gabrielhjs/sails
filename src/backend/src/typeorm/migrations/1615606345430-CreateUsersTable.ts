import { MigrationInterface, QueryRunner, Table } from "typeorm";


export class CreateUsersTable1615606345430 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "users",
			columns: [
				{
					name: "id",
					type: "uuid",
					isPrimary: true
				},
				{
					name: "name",
					type: "varchar"
				},
				{
					name: "email",
					type: "varchar",
					isUnique: true
				},
				{
					name: "password",
					type: "varchar"
				},
				{
					name: "createdAt",
					type: "date"
				},
				{
					name: "updatedAt",
					type: "date"
				},
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("users")
	}
}
