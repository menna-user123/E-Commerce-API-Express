//Create Product
//Get All Products
//Get Product by ID
//Update Product
//Delete Product
import Productmodel from "../models/PRODUCT.model.js";
import type { product } from "../interfaces/PRODUCT.interface.js";
export class ProductService {
  async createproduct(body: product) {
    return await Productmodel.create(body);
  }
  async getAllproducts() {
    return await Productmodel.find();
  }
  async getProductById(id: string | string[] | undefined) {
    return await Productmodel.findById(id);
  }
  async updateProductByIdpartial(
    id: string | string[] | undefined,
    body: Partial<product>,
  ) {
    return await Productmodel.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });
  }
  async deleteProductById(id: string | string[] | undefined) {
    return await Productmodel.findByIdAndDelete(id);
  }
}
