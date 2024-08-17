import { Router } from "express";
import authController from "./controllers/authController.js";
import menuController from "./controllers/menuController.js";
import catController from "./controllers/catController.js";

const router = Router();

router.use("/auth", authController);
router.use("/menu", menuController);
router.use("/category", catController);

export default router;
