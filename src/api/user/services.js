import models from "../../../models";
const { NotFound, Conflict } = require("../../helpers/errors");

export const updateBalance = async (userId, amount) => {
	return await models.sequelize.transaction(async (t) => {
		const user = await models.User.findByPk(userId, { transaction: t });

		if (!user) throw new NotFound("User not found");

		const newBalance = user.balance + amount;

		if (newBalance < 0) throw new Conflict("Insufficient balance");

		user.balance = newBalance;

		try {
			await user.save({ transaction: t });
		} catch (error) {
			if (error.name === "SequelizeOptimisticLockError") {
				throw new Conflict("Concurrency error, please retry");
			}
			throw error;
		}

		return user;
	});
};
