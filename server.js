import config from "./config";
import express from "express";

const processId = process.pid;

async function startServer() {
	const app = express();

	await require("./loaders").default({ expressApp: app });

	const server = app
		.listen(config.port, () => console.log(`Server Started in process ${processId}`))
		.on("error", (err) => {
			console.error(err);
			process.exit(1);
		});
}

startServer();


