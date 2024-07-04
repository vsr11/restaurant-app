import mongoose from "mongoose";

export default function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.MongooseError) {
    err = Object.values(err.errors).map((x) => x.message)[2];
  }

  if (!err instanceof Error) {
    err = new Error(err);
  }

  console.log(err);
  return res.json(err);
}
