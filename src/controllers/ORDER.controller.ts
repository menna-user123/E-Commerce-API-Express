import { APPERROR } from "../Utils/apperror.js";
import { orderservices } from "../services/ORDER.services.js";
import { type Response, type Request } from "express";
import { validateOrderUpdateBody } from "../Utils/validation.js";
const Orderservice = new orderservices();
export class Ordercontroller {
  async getorders(req: Request, res: Response) {
    const orders = await Orderservice.getAllorders();
    if (!orders) throw new APPERROR("orders not found", 404);
    return res.status(201).json({ status: "orders found", data: orders });
  }

  async getoneorder(req: Request, res: Response) {
    const order = await Orderservice.getOrderById(req.params.id);
    if (!order) throw new APPERROR("order not found", 404);
    return res.status(201).json({ status: "order found", data: order });
  }

  async updateOrderpartial(req: Request, res: Response) {
    validateOrderUpdateBody(req.body);
    const order = await Orderservice.updateOrderByIdpartial(
      req.params.id,
      req.body,
    );
    if (!order) throw new APPERROR("order not updated", 404);
    return res.status(201).json({ status: "order updated", data: order });
  }

  async deleteOrder(req: Request, res: Response) {
    const order = await Orderservice.deleteOrderById(req.params.id);
    if (!order) throw new APPERROR("order not deleted", 404);
    return res.status(201).json({ status: "order deleted" });
  }

  async checkoutOrder(req: Request, res: Response) {
    const order = await Orderservice.checkoutOrder(req.params.userId);
    if (!order) throw new APPERROR("order not created", 404);
    return res.status(201).json({
      status: "order done",
      data: order,
    });
  }
}
