import type { ObjectId } from "mongoose";
export interface Cartproducts {
  product: ObjectId;
  quantity: number;
}
export interface cart {
  user: ObjectId;
  products: Cartproducts[];
}
