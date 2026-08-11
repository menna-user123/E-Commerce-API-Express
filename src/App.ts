import express from "express";
import { errorHandle } from "./controllers/error.controller.js";
import { userrote } from "./routes/USER.route.js";
import morgan from "morgan";
import { Productrote } from "./routes/PRODUCT.route.js";
import { CartRoute } from "./routes/CART.route.js";
import { Orderrote } from "./routes/ORDER.route.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
const App = express();
App.use(express.json());
if (process.env.NODE_ENV === "development") App.use(morgan("dev"));
App.use(helmet());
const limit = rateLimit({
  windowMs: 200 * 60 * 1000,
  message: {
    status: "error",
    message: "Too many requests",
  },
});
App.use(limit);
App.use("/user", userrote);
App.use("/product", Productrote);
App.use("/cart", CartRoute);
App.use("/order", Orderrote);
App.use(errorHandle);
export default App;
