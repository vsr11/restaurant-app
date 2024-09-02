import { defaults, schemaOptions } from "../constants.js";
import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
const ai = AutoIncrement(mongoose);

const userSchema = new mongoose.Schema(
  {
    id: Number,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "USER"],
      default: defaults.account_role,
    },
  },
  schemaOptions
);

userSchema.plugin(ai, { id: "user", inc_field: "id" });

export default mongoose.model("User", userSchema);
