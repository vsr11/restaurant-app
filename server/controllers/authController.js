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

router.post("/login", async (req, res, next) => {
  try {
    let userData = {};
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const { email, name } = user;
      userData = { email, name };
      return res.json({ ok: true, data: userData });
    } else {
      return res.json({ ok: false, data: user });
    }
  } catch (e) {
    next(e);
  }
});

router.get("/view", async (req, res, next) => {
  try {
    let user = await User.find();

    if (!user) {
      return res.json({ ok: false, data: "No users found!" });
    } else {
      return res.status(201).json({ ok: true, data: user });
    }
  } catch (e) {
    next(e);
  }
});

export default router;
