import type { Order } from "../interfaces/ORDER.interface.js";
import type { PurchasedProducts } from "../interfaces/ORDER.interface.js";
import mongoose, { model } from "mongoose";
const PurchasedProductSchema = new mongoose.Schema<PurchasedProducts>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product model",
    },
    quantity: {
      type: "Number",
      required: [true, "must be order product quantity"],
      min: 1,
    },
    price: {
      type: "Number",
      required: [true, "must be order product price"],
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);
const orderSchema = new mongoose.Schema<Order>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USERS",
    },
    PurchasedProducts: {
      type: [PurchasedProductSchema],
    },
    totalPrice: {
      type: "Number",
      required: [true, "must be order total price"],
    },
    orderStatus: {
      type: "string",
      required: [true, "must be order status"],
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);
const ordermodel = model("order model", orderSchema);
export default ordermodel;
