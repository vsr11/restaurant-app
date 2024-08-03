import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  price: { type: Number, required: true },
  image: String,
});

export default mongoose.model("Menu", menuSchema);
