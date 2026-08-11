import cartmodel from "../models/CART.model.js";
import { APPERROR } from "../Utils/apperror.js";
import Productmodel from "../models/PRODUCT.model.js";
import UserModel from "../models/USER.model.js";
export class CartService {
  async getAllcharts() {
    return await cartmodel.find();
  }
  async getCartById(id: string | string[] | undefined) {
    return await cartmodel.findById(id);
  }

  async deleteCartById(id: string | string[] | undefined) {
    return await cartmodel.findByIdAndDelete(id);
  }
  async AddproductTocart(
    productId: string | string[] | undefined,
    userId: string | string[] | undefined,
    quantity: number,
  ) {
    //get product
    //get user
    //get cart belong top user
    //if cart not exist then create cart
    //if cart exists then add the product to it
    //if product exists in cart increase quantity only
    //save cart
    const Product = await Productmodel.findById(productId);
    if (!Product) throw new APPERROR("Product not found", 404);

    const User = await UserModel.findById(userId);
    if (!User) throw new APPERROR("User not found", 404);

    const cart = await cartmodel.findOne({ user: User._id as any });
    if (!cart) {
      return await cartmodel.create({
        user: User._id as any,
        products: [
          {
            product: Product._id as any,
            quantity: quantity,
          },
        ],
      });
    }
    if (
      cart.products.some((p) => p.product.toString() === Product._id.toString())
    ) {
      const productItem = cart.products.find(
        (p) => p.product.toString() === Product._id.toString(),
      );
      if (productItem) productItem.quantity += quantity;
    } else {
      cart.products.push({
        product: Product._id as any,
        quantity: quantity,
      });
    }
    await cart.save();
    return cart;
  }

  async Removeproductfromcart(
    productId: string | string[] | undefined,
    userId: string | string[] | undefined,
  ) {
    //get product
    const Product = await Productmodel.findById(productId);
    if (!Product) throw new APPERROR("Product not found", 404);
    //get user
    const User = await UserModel.findById(userId);
    if (!User) throw new APPERROR("User not found", 404);
    //get cart belong to that user
    const cart = await cartmodel.findOne({ user: User._id as any });
    if (!cart) throw new APPERROR("User has no Cart", 404);
    //find product in products in cart
    const productItem = cart.products.find(
      (p) => p.product.toString() === Product._id.toString(),
    );
    if (!productItem) throw new APPERROR("Product not found in cart", 404);
    //filter cart by remove product if exist
    cart.products = cart.products.filter(
      (p) => p.product.toString() !== Product._id.toString(),
    );
    await cart.save();
    return cart;
  }

  async updateproductquantityfromcart(
    productId: string | string[] | undefined,
    userId: string | string[] | undefined,
    quantity: number,
  ) {
    //get product
    const Product = await Productmodel.findById(productId);
    if (!Product) throw new APPERROR("Product not found", 404);
    // get user
    const User = await UserModel.findById(userId);
    if (!User) throw new APPERROR("User not found", 403);
    //get cart belong to user
    const cart = await cartmodel.findOne({
      user: User._id as any,
    });
    if (!cart) throw new APPERROR("User has no Cart", 403);
    //find product in cart
    const productItem = cart.products.find(
      (p) => p.product.toString() === Product._id.toString(),
    );
    if (!productItem) throw new APPERROR("Product not found in cart", 403);
    //update quantity
    productItem.quantity = quantity;
    await cart.save();
    return cart;
  }
}
