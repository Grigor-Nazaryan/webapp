import { Umzug, SequelizeStorage } from "umzug";
import models from "../models";

export default async () => {
	const umzug = new Umzug({
		migrations: {
			glob: "migrations/*.js",
			resolve: ({ name, path, context }) => {
				const migration = require(path);
				return {
					name,
					up: async () => migration.up(context, models.Sequelize),
					down: async () => migration.down(context, models.Sequelize),
				};
			},
		},
		storage: new SequelizeStorage({ sequelize: models.sequelize }),
		context: models.sequelize.getQueryInterface(),
		logger: console,
	});

	await umzug.up();
};
