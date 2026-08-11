import { APPERROR } from "../Utils/apperror.js";
import { ProductService } from "../services/PRODUCT.services.js";
import { type Response, type Request } from "express";
import { validateProductBody } from "../Utils/validation.js";
import { validateProductUpdateBody } from "../Utils/validation.js";
const Productservice = new ProductService();
export class Productcontroller {
  async createuser(req: Request, res: Response) {
    validateProductBody(req.body);
    const product = await Productservice.createproduct(req.body);
    if (!product) throw new APPERROR("product not created", 404);
    return res.status(201).json({ status: "product created" });
  }

  async getusers(req: Request, res: Response) {
    const Products = await Productservice.getAllproducts();
    if (!Products) throw new APPERROR("products not found", 404);
    return res.status(201).json({ status: "products found", data: Products });
  }

  async getoneuser(req: Request, res: Response) {
    const product = await Productservice.getProductById(req.params.id);
    if (!product) throw new APPERROR("product not found", 404);
    return res.status(201).json({ status: "products found", data: product });
  }

  async updateuserpartial(req: Request, res: Response) {
    validateProductUpdateBody(req.body);
    const product = await Productservice.updateProductByIdpartial(
      req.params.id,
      req.body,
    );
    if (!product) throw new APPERROR("product not updated", 404);
    return res.status(201).json({ status: "product updated", data: product });
  }

  async deleteuser(req: Request, res: Response) {
    const product = await Productservice.deleteProductById(req.params.id);
    if (!product) throw new APPERROR("product not deleted", 404);
    return res.status(201).json({ status: "product deleted" });
  }
}
