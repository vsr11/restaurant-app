import { isEmpty } from "restaurant-app-common";
import { Router } from "express";
import Menu from "../models/Menu.js";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let menu = await Menu.find().lean();
    return res.json({ ok: true, data: menu });
  } catch (e) {
    next(e);
  }
});

router.get("/view/:id", async (req, res, next) => {
  try {
    const id = req?.params?.id;
    let menu = await Menu.findById(id).lean();
    if (!isEmpty(menu)) {
      return res.json({ ok: true, data: menu });
    } else {
      return res.json({ ok: false, data: null });
    }
  } catch (e) {
    next(e);
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const q = req?.query?.query;
    let menu = await Menu.find({ $text: { $search: q || "" } }).lean();
    return res.json({ ok: true, data: menu });
  } catch (e) {
    next(e);
  }
});

export default router;
