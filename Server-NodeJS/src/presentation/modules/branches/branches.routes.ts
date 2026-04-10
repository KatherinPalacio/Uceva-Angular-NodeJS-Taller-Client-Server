import { Router } from 'express';
import { BranchesController } from './branches.controller';

export class BranchesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new BranchesController();

    /**
     * @openapi
     * /api/branches/{countBranches}:
     *   get:
     *     summary: Obtiene un listado de sucursales
     *     tags:
     *       - Branches
     *     parameters:
     *       - in: path
     *         name: countBranches
     *         required: true
     *         schema:
     *           type: integer
     *         description: Cantidad de sucursales a generar
     *     responses:
     *       200:
     *         description: Listado de sucursales generado correctamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Branch'
     *       400:
     *         description: Parámetro inválido
     */
    router.get('/:countBranches', controller.getAllBranches);

    return router;
  }
}