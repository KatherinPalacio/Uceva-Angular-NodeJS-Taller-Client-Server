import { Router } from 'express';
import { BranchesController } from './branches.controller';

/**
 * Rutas del módulo de sucursales.
 *
 * @remarks
 * Define los endpoints disponibles para
 * la gestión de sucursales.
 */
export class BranchesRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new BranchesController();

    router.get('/:countBranches', controller.getAllBranches);

    return router;
  }
}