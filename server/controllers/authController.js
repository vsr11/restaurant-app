import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json(null);
    }

    user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

export default router;
