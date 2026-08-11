import type { product } from "../interfaces/PRODUCT.interface.js";
import mongoose, { model } from "mongoose";
const ProductSchema = new mongoose.Schema<product>(
  {
    Productname: {
      type: "string",
      required: [true, "must be product name"],
    },
    ProductDescription: {
      type: "string",
      required: [true, "must be product description"],
    },
    Price: { type: "number", required: [true, "must be product price"] },
    StockQuantity: {
      type: "number",
      required: [true, "must be product quantity"],
      min: 1,
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);
const Productmodel = model("productmodel", ProductSchema);
export default Productmodel;
