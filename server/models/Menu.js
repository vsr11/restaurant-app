import { schemaOptions } from "../constants.js";
import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
const ai = AutoIncrement(mongoose);

const menuSchema = new mongoose.Schema(
  {
    id: Number,
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true },
    image: String,
  },
  schemaOptions
);

menuSchema.index({ "$**": "text" });
menuSchema.plugin(ai, { id: "menu", inc_field: "id" });

export default mongoose.model("Menu", menuSchema);
