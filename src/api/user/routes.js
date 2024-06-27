import { Router } from "express";
const router = Router();

import { updateBalance } from "./controllers";
import { checkUpdateBalance } from "./validations";

router.put("/updateBalance", checkUpdateBalance, updateBalance);

export default router;
