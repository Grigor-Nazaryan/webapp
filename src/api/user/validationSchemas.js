import Joi from "@hapi/joi";

export const checkUpdateBalanceSchema = Joi.object({
	email: Joi.string().email().lowercase().trim().required().empty("").messages({
		"string.email": "Please enter a valid email address",
		"any.required": "Email is required",
	}),
	password: Joi.string()
		.min(8)
		.max(20)
		.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"))
		.required()
		.empty("")
		.messages({
			"string.min": "Password must be at least 8 characters long",
			"string.max": "Password must be less than or equal to 20 characters long",
			"string.pattern.base": "Password must include uppercase, lowercase, numbers, and special characters",
			"any.required": "Password is required",
		}),
});
