export const APIResponse = (res, status, data) => res.status(status).json({ status, data });
