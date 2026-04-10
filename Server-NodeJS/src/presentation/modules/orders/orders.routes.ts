import { Router } from 'express';
import { OrdersController } from './orders.controller';

export class OrdersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new OrdersController();

    /**
     * @openapi
     * /api/orders/{countOrders}:
     *   get:
     *     summary: Obtiene un listado de pedidos
     *     tags:
     *       - Orders
     *     parameters:
     *       - in: path
     *         name: countOrders
     *         required: true
     *         schema:
     *           type: integer
     *         description: Cantidad de pedidos a generar
     *     responses:
     *       200:
     *         description: Listado de pedidos generado correctamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     *       400:
     *         description: Parámetro inválido
     */
    router.get('/:countOrders', controller.getAllOrders);

    return router;
  }
}