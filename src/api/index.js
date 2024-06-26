import { Router } from "express";
const router = Router();

import user from "./user/routes";

router.use("/user", user);

export default router;
