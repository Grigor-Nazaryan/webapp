import { config } from "dotenv";

const envFound = config();
if (envFound.error) throw new Error("Couldn't find .env file");

export default {
	port: process.env.PORT,
	api: { prefix: "/api" },
	postgres: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "postgres",
		logging: false,
		pool: {
			max: 10,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
};
