import { GeneralError } from "../helpers/errors";

const handleErrors = (err, req, res, next) => {
    console.info(err.message);

    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            status: "error",
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: err.message,
    });
};

export default handleErrors;
