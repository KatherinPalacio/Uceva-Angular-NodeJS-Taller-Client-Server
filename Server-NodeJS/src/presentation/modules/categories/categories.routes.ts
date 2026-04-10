import { Router } from 'express';
import { CategoriesController } from './categories.controller';

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriesController();

    /**
     * @openapi
     * /api/categories/{countCategories}:
     *   get:
     *     summary: Obtiene un listado de categorías
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: countCategories
     *         required: true
     *         schema:
     *           type: integer
     *         description: Cantidad de categorías a generar
     *     responses:
     *       200:
     *         description: Listado de categorías generado correctamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Category'
     *       400:
     *         description: Parámetro inválido
     */
    router.get('/:countCategories', controller.getAllCategories);

    return router;
  }
}