import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  visible: { type: Boolean, default: true },
  description: String,
  image: String,
});

export default mongoose.model("Category", categorySchema);
