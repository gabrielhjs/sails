import dotenv from "dotenv"

dotenv.config()

module.exports = {
	"type": `${process.env.DB_TYPE}`,
	"url": `${process.env.DB_URL}`,
	"synchronize": true,
	"logging": false,
	"entities": [
		 "src/typeorm/models/*.ts"
	],
	"migrations": [
		 "src/typeorm/migrations/*.ts"
	],
	"cli": {
		"migrationsDir": "src/typeorm/migrations"
	}
}