import { Router } from "express";
import { Usercontroller } from "../controllers/USER.controller.js";
const usercontroller = new Usercontroller();
export const userrote = Router();
userrote.get("/", usercontroller.getusers);
userrote.get("/:id", usercontroller.getoneuser);
userrote.post("/", usercontroller.createuser);
userrote.put("/:id", usercontroller.updateuserpartial);
userrote.delete("/:id", usercontroller.deleteuser);
