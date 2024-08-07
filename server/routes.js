import { Router } from "express";
import authController from "./controllers/authController.js";
import menuController from "./controllers/menuController.js";

const router = Router();

router.use("/auth", authController);
router.use("/menu", menuController);

export default router;
