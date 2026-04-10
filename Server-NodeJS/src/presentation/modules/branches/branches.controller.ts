import { Request, Response } from 'express';
import { BranchesService } from './branches.service';

/**
 * Controlador de sucursales.
 *
 * @remarks
 * Gestiona las peticiones HTTP relacionadas
 * con el módulo de sucursales.
 */
export class BranchesController {

  private readonly branchesService = new BranchesService();

  /**
   * Obtiene el listado de sucursales.
   *
   * @param req - Objeto de solicitud HTTP.
   * @param res - Objeto de respuesta HTTP.
   * @returns Respuesta con el listado de sucursales.
   */
  getAllBranches = (req: Request, res: Response) => {
    const { countBranches } = req.params;
    const total = Number(countBranches);

    if (isNaN(total) || total <= 0) {
      return res.status(400).json({
        message: 'La cantidad de sucursales debe ser mayor a 0',
      });
    }

    const branches = this.branchesService.getAllBranches(total);

    return res.json(branches);
  };
}