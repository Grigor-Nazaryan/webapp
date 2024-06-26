import expressLoader from "./express";
import sequelizeLoader from "./sequelize";
import umzug from "./umzug";

export default async ({ expressApp }) => {
	await umzug();
	console.info("Migrations completed");

	await sequelizeLoader();
	console.info("Sequelize loaded and connected!");

	await expressLoader({ app: expressApp });
	console.info("Express loaded");
};
