import { Router } from "express";
import { cartcontroller } from "../controllers/CART.controller.js";
const CartController = new cartcontroller();
export const CartRoute = Router();
CartRoute.post("/:userId/products/", CartController.addproducttocart);
CartRoute.delete(
  "/:userId/products/:productId",
  CartController.removeproductfromcart,
);
CartRoute.put(
  "/:userId/products/:productId",
  CartController.updateproductquantity,
);
CartRoute.get("/", CartController.getcarts);
CartRoute.get("/:id", CartController.getonecart);
CartRoute.delete("/:id", CartController.deletecart);
