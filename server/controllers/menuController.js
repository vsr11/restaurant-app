import { Router } from "express";
import Menu from "../models/Menu.js";
const router = Router();

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
