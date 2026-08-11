import { Router } from "express";
import { Ordercontroller } from "../controllers/ORDER.controller.js";
const ordercontroller = new Ordercontroller();
export const Orderrote = Router();
Orderrote.get("/", ordercontroller.getorders);
Orderrote.get("/:id", ordercontroller.getoneorder);
Orderrote.put("/:id", ordercontroller.updateOrderpartial);
Orderrote.delete("/:id", ordercontroller.deleteOrder);
Orderrote.post("/checkout/:userId", ordercontroller.checkoutOrder);
