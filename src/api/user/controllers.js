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
			const user = await models.User.findByPk(userId, { lock: t.LOCK.UPDATE, transaction: t });

			if (!user) {
				return res.status(404).send("User not found");
			}

			if (user.balance + amount < 0) {
				return res.status(400).send("Insufficient balance");
			}

			user.balance += amount;

			await user.save({ transaction: t });

			return APIResponse(res, OK, `New balance: ${user.balance}`);
		});
	} catch (err) {
		next(err);
	}
};
