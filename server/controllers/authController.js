import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    let userData = {};
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.json({ ok: false, data: "User exists!" });
    }

    user = await User.create(req.body);

    if (user) {
      const { email, name } = user;
      userData = { email, name };
    }

    return res.status(201).json({ ok: true, data: userData });
  } catch (e) {
    next(e);
  }
});

export default router;
