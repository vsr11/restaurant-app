// server port
export const PORT = 5000;

export const DB_STR = "mongodb://127.0.0.1:27017/";
export const DB_NAME = "rest";

export const defaults = {
  account_role: "USER",
};

export const roles = ["USER", "ADMIN"];

export const schemaOptions = {
  toJSON: { virtuals: true },
};
