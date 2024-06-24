import express from "express";
import cors from "cors";
import { PORT } from "../constants.js";
import routes from "../routes.js";
import errorHandler from "../errorHandler.js";

const app = express();

app.set("x-powered-by", false);

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
