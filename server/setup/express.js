import express from "express";
import { PORT } from "../constants.js";

const app = express();

app.set("x-powered-by", false);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
