import type { ObjectId } from "mongoose";
export interface PurchasedProducts {
  product: ObjectId;
  quantity: number;
  price: number;
}
export interface Order {
  user: ObjectId;
  PurchasedProducts: PurchasedProducts[];
  totalPrice: number;
  orderStatus: string;
}
