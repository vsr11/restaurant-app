import { MongooseError } from "mongoose";

export default function errorHandler(error, req, res, next) {
  let errors = [];
  if (error instanceof MongooseError) {
    errors = Object.values(error.errors).map((x) => x.message);
  } else if (error) {
    errors = [error];
  }
  return res.json(errors);
}
