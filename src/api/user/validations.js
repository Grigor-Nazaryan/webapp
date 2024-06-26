import { checkUpdateBalanceSchema } from "./validationSchemas";

export const checkUpdateBalance = async (req, res, next) => {
	try {
		const result = await checkUpdateBalanceSchema.validateAsync(req.body);
		next();
	} catch (error) {
		next(error);
	}
};
