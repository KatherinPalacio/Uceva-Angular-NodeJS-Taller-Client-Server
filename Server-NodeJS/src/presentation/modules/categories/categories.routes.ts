import { Router } from 'express';
import { CategoriesController } from './categories.controller';

/**
 * Rutas del módulo de categorías.
 *
 * @remarks
 * Define los endpoints disponibles para
 * la gestión de categorías.
 */
export class CategoriesRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new CategoriesController();

    router.get('/:countCategories', controller.getAllCategories);

    return router;
  }
}