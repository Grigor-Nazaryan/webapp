import {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    CONFLICT,
    GONE,
    UNSUPPORTED_MEDIA_TYPE,
    UNPROCESSABLE_ENTITY,
    SERVICE_UNAVAILABLE,
    INTERNAL_SERVER_ERROR,
} from "../../constants/statusCodes";

export class GeneralError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    getCode() {
        if (this instanceof BadRequest) return BAD_REQUEST;
        if (this instanceof AuthError) return UNAUTHORIZED;
        if (this instanceof Forbidden) return FORBIDDEN;
        if (this instanceof NotFound) return NOT_FOUND;
        if (this instanceof Conflict) return CONFLICT;
        if (this instanceof Gone) return GONE;
        if (this instanceof UnsupportedMediaType) return UNSUPPORTED_MEDIA_TYPE;
        if (this instanceof ValidationError) return UNPROCESSABLE_ENTITY;
        if (this instanceof ExternalApiError) return SERVICE_UNAVAILABLE;

        return INTERNAL_SERVER_ERROR;
    }
}

export class BadRequest extends GeneralError {}
export class AuthError extends GeneralError {}
export class Forbidden extends GeneralError {}
export class NotFound extends GeneralError {}
export class Conflict extends GeneralError {}
export class Gone extends GeneralError {}
export class UnsupportedMediaType extends GeneralError {}
export class ValidationError extends GeneralError {}
export class ExternalApiError extends GeneralError {}
