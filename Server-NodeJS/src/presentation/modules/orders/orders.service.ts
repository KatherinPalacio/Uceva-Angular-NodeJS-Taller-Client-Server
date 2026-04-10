import { Order } from "../../../domain/interfaces/order.interface";

export class OrdersService {
  getAllOrders(countOrders: number): Order[] {
    const orders: Order[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push({
        id: i,
        customerName: `Cliente ${i}`,
        productName: `Producto ${i}`,
        quantity: i,
        total: i * 25000,
        status: i % 2 === 0 ? 'Entregado' : 'Pendiente'
      });
    }

    return orders;
  }
}