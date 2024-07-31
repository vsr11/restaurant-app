import { defaults } from "../constants.js";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN", "USER"],
    default: defaults.account_role,
  },
});

export default mongoose.model("User", userSchema);
