import ordermodel from "../models/ORDER.model.js";
import type { Order } from "../interfaces/ORDER.interface.js";
import cartmodel from "../models/CART.model.js";
import UserModel from "../models/USER.model.js";
import { APPERROR } from "../Utils/apperror.js";
export class orderservices {
  async getAllorders() {
    return await ordermodel.find();
  }
  async getOrderById(id: string | string[] | undefined) {
    return await ordermodel.findById(id);
  }
  async updateOrderByIdpartial(
    id: string | string[] | undefined,
    body: Partial<Order>,
  ) {
    return await ordermodel.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });
  }
  async deleteOrderById(id: string | string[] | undefined) {
    return await ordermodel.findByIdAndDelete(id);
  }
  //• Complete Order from Cart
  //When completing an order:
  //When completing an order:
  async checkoutOrder(userId: string | string[] | undefined) {
    const User = await UserModel.findById(userId);
    if (!User) throw new APPERROR("User not found", 404);

    const cart = await cartmodel
      .findOne({ user: User._id as any })
      .populate("products.product");

    //• Validate that the cart is not empty.
    if (!cart) throw new APPERROR("cart is empty", 404);

    //• Calculate the total order price.
    let totalOrderPrice = 0;

    for (const item of cart.products) {
      const product = item.product as any;
      if (!product) throw new APPERROR("Product not found", 404);
      const quantity = item.quantity;
      const price = product.Price;
      totalOrderPrice += price * quantity;

      //• Decrease product stock.
      product.StockQuantity -= quantity;
      await product.save();
    }

    //• Create a new order.
    const order = await ordermodel.create({
      user: User._id as any,
      PurchasedProducts: cart.products.map((item) => ({
        product: (item.product as any)._id,
        quantity: item.quantity,
        price: (item.product as any).Price,
      })),
      totalPrice: totalOrderPrice,
      orderStatus: "completed",
    });

    //• Clear the user's cart
    cart.products = [];
    await cart.save();

    return order;
  }
}
