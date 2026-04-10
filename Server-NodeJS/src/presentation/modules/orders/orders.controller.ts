import { Request, Response } from "express";
import { OrdersService } from "./orders.service";

export class OrdersController {
  private readonly ordersService = new OrdersService();

  getAllOrders = (req: Request, res: Response) => {
    const { countOrders } = req.params;
    const total = Number(countOrders);

    if (isNaN(total) || total <= 0) {
      return res.status(400).json({
        message: "La cantidad de pedidos debe ser un número mayor a 0"
      });
    }

    const orders = this.ordersService.getAllOrders(total);
    return res.json(orders);
  };
}