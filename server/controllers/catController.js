import Category from "../models/Category.js";
import { Router } from "express";
const router = Router();

router.get("/:cat?", async (req, res, next) => {
  try {
    const cat = req?.params?.cat;
    let selectedCategory = null;
    let categoryArray = [];
    if (!cat || cat === "undefined") {
      selectedCategory = await Category.find().select("name").lean();
      for (const x of selectedCategory) {
        categoryArray.push(x?.name);
      }
      selectedCategory = categoryArray;
    } else {
      selectedCategory = await Category.find()
        .or([
          {
            name: { $regex: cat },
          },
          {
            description: { $regex: cat },
          },
        ])
        .lean();
    }

    return res.json({ ok: true, data: selectedCategory });
  } catch (e) {
    next(e);
  }
});

export default router;
