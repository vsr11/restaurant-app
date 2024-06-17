import mongoose from "mongoose";
import { DB_STR, DB_NAME } from "../constants.js";

main().catch((e) => console.log(`Error: ${e}`));

async function main() {
  try {
    mongoose.connection.on("connecting", () =>
      console.log("Connecting to DB...")
    );
    mongoose.connection.on("connected", () => console.log("Connected to DB."));
    mongoose.connection.on("open", () => console.log("Connection open."));
    mongoose.connection.on("disconnected", () =>
      console.log("Disconnected from DB!")
    );
    mongoose.connection.on("reconnected", () =>
      console.log("Reconnected to DB.")
    );
    mongoose.connection.on("disconnecting", () =>
      console.log("Disconnecting from DB...")
    );
    mongoose.connection.on("close", () => console.log("Connection closed."));
    mongoose.connection.on("error", (e) => {
      console.log(`DB error: ${e}`);
    });

    await mongoose.connect(`${DB_STR}${DB_NAME}`);
  } catch (e) {
    console.log(`DB error: ${e}`);
  }
}
