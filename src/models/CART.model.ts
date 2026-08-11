import type { cart } from "../interfaces/CART.interface.js";
import type { Cartproducts } from "../interfaces/CART.interface.js";
import mongoose, { model } from "mongoose";
const CartProductsSchema = new mongoose.Schema<Cartproducts>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productmodel",
    },
    quantity: {
      type: "Number",
      required: [true, "must be cart product quantity"],
      default: 1,
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);
const CartSchema = new mongoose.Schema<cart>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USERS",
      unique: true,
    },
    products: {
      type: [CartProductsSchema],
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);
const cartmodel = model("cart model", CartSchema);
export default cartmodel;
