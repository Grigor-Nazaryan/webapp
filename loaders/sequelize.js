import models from "../models";

export default async () => {
	models.sequelize
		.sync()
		.then(() => console.info("Nice! Database looks fine"))
		.catch((err) => console.error(err, "Something went wrong with the Database Update!"));
};
