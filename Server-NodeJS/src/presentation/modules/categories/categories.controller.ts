import { Request, Response } from 'express';
import { CategoriesService } from './categories.service';

/**
 * Controlador de categorías.
 *
 * @remarks
 * Gestiona las peticiones HTTP relacionadas
 * con el módulo de categorías.
 */
export class CategoriesController {

  private readonly categoriesService = new CategoriesService();

  /**
   * Obtiene el listado de categorías.
   *
   * @param req - Objeto de solicitud HTTP.
   * @param res - Objeto de respuesta HTTP.
   * @returns Respuesta con el listado de categorías.
   */
  getAllCategories = (req: Request, res: Response) => {
    const { countCategories } = req.params;
    const total = Number(countCategories);

    if (isNaN(total) || total <= 0) {
      return res.status(400).json({
        message: 'La cantidad de categorías debe ser mayor a 0',
      });
    }

    const categories = this.categoriesService.getAllCategories(total);

    return res.json(categories);
  };
}