import mongoose from "mongoose";
import App from "./App.js";
import "dotenv/config";
App.listen(process.env.PORT, () => {
  console.log(`server run on port ${process.env.PORT}`);
});
await mongoose.connect(process.env.DB_URL as string);
console.log("mongoose connected");
