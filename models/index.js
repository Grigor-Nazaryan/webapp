import * as fs from "fs";
import * as path from "path";
import Sequelize from "sequelize";
const basename = path.basename(__filename);
import config from "../config";
const db = {};

let sequelize = new Sequelize(
	config.postgres.database,
	config.postgres.username,
	config.postgres.password,
	config.postgres
);

fs.readdirSync(__dirname)
	.filter((file) => {
		return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
	})
	.forEach((file) => {
		const model = sequelize["import"](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
