import { faker } from '@faker-js/faker';
import { Order } from '../../../domain/interfaces/order.interface';

export class OrdersService {
  getAllOrders(countOrders: number): Order[] {
    const orders: Order[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push({
        id: i,
        customerName: faker.person.fullName(),
        productName: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 10 }),
        total: faker.number.int({ min: 20000, max: 500000 }),
        status: faker.helpers.arrayElement(['Pendiente', 'Entregado']),
      });
    }

    return orders;
  }
}