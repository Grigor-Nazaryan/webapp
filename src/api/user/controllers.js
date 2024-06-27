import { OK } from "../../../constants/statusCodes";
import { updateBalance as updateBalanceService } from "./services";
import { APIResponse } from "../../helpers/utils";

/**
 * @description Change user's Balance
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} user's Balance information
 */

export const updateBalance = async (req, res, next) => {
	const { userId, amount } = req.body;

	try {
		const updatedUser = await updateBalanceService(userId, amount);
		return APIResponse(res, OK, `New balance: ${updatedUser.balance}`);
	} catch (err) {
		next(err);
	}
};
