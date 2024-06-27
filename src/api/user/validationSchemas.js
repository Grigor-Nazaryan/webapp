import Joi from "@hapi/joi";

export const checkUpdateBalanceSchema = Joi.object({
	userId: Joi.number().integer().positive().required().messages({
		"number.base": "User ID must be a number",
		"number.integer": "User ID must be an integer",
		"number.positive": "User ID must be a positive number",
		"any.required": "User ID is required",
	}),
	amount: Joi.number().required().not(0).messages({
		"number.base": "Amount must be a number",
		"number.required": "Amount is required",
		"number.not": "Amount cannot be zero",
	}),
});
