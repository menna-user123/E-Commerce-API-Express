import { CartService } from "../services/CART.services.js";
import { APPERROR } from "../Utils/apperror.js";
import { type Response, type Request } from "express";
import { validateAddProductToCartBody } from "../Utils/validation.js";
import { validateCartQuantityBody } from "../Utils/validation.js";
const cartservices = new CartService();
export class cartcontroller {
  async getcarts(req: Request, res: Response) {
    const carts = await cartservices.getAllcharts();
    if (!carts) throw new APPERROR("carts not found", 404);
    return res.status(201).json({ status: "carts found", data: carts });
  }

  async getonecart(req: Request, res: Response) {
    const cart = await cartservices.getCartById(req.params.id);
    if (!cart) throw new APPERROR("cart not found", 404);
    return res.status(201).json({ status: "cart found", data: cart });
  }

  async deletecart(req: Request, res: Response) {
    const cart = await cartservices.deleteCartById(req.params.id);
    if (!cart) throw new APPERROR("cart not deleted", 404);
    return res.status(201).json({ status: "cart deleted" });
  }
  async addproducttocart(req: Request, res: Response) {
    validateAddProductToCartBody(req.body);
    const data = await cartservices.AddproductTocart(
      req.body.productId,
      req.params.userId,
      req.body.quantity,
    );

    if (!data) throw new APPERROR("cart not added", 404);
    return res.status(201).json({ status: "cart added" });
  }
  async removeproductfromcart(req: Request, res: Response) {
    const data = await cartservices.Removeproductfromcart(
      req.params.productId,
      req.params.userId,
    );
    if (!data) throw new APPERROR("fail to remove", 404);
    return res.status(201).json({ status: "product removed" });
  }
  async updateproductquantity(req: Request, res: Response) {
    validateCartQuantityBody(req.body);
    const data = await cartservices.updateproductquantityfromcart(
      req.params.productId,
      req.params.userId,
      req.body.quantity,
    );
    if (!data) throw new APPERROR("fail to update", 404);
    return res.status(201).json({ status: "quantity updated" });
  }
}
