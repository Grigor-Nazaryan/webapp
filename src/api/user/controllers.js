import { OK } from "../../../constants/statusCodes";
import models from "../../../models";
import { APIResponse } from "../../helpers/utils";

/**
 * @description Change user's Balance
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} user's Balance information
 */

export const updateBalance = async (req, res, next) => {
	try {
		const { userId, amount } = req.body;

		models.sequelize.transaction(async (t) => {
			const user = await models.User.findByPk(userId, { transaction: t });

			if (!user) return res.status(404).send("User not found");

			const newBalance = user.balance + amount;

			if (newBalance < 0) throw new Error("Insufficient balance");

			const updatedUser = await user.update(
				{ balance: newBalance, version: user.version + 1 },
				{ where: { id: userId, version: user.version }, transaction: t }
			);

			return APIResponse(res, OK, `New balance: ${updatedUser.balance}`);
		});
	} catch (err) {
		next(err);
	}
};
