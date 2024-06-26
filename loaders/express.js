import express from "express";

import api from "../src/api";
import handleErrors from "../src/middlewares/handleErrors";
import config from "../config";

export default ({ app }) => {
	app.use(express.json());

	app.use(express.urlencoded({ limit: "50mb", extended: false }));

	app.use(config.api.prefix, api);

	app.use(handleErrors);
};
