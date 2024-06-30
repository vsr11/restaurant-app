import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

export default router;
