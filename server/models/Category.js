import { schemaOptions } from "../constants.js";
import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
const ai = AutoIncrement(mongoose);

const categorySchema = new mongoose.Schema(
  {
    id: Number,
    name: { type: String, required: true },
    visible: { type: Boolean, default: true },
    description: String,
    image: String,
  },
  schemaOptions
);

categorySchema.plugin(ai, { id: "category", inc_field: "id" });

export default mongoose.model("Category", categorySchema);
