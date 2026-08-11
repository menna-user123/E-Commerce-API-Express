import { Router } from "express";
import { Productcontroller } from "../controllers/PRODUCT.controller.js";
const productcontroller = new Productcontroller();
export const Productrote = Router();
Productrote.get("/", productcontroller.getusers);
Productrote.get("/:id", productcontroller.getoneuser);
Productrote.post("/", productcontroller.createuser);
Productrote.put("/:id", productcontroller.updateuserpartial);
Productrote.delete("/:id", productcontroller.deleteuser);
