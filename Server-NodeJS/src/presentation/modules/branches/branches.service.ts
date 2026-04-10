import { Branch } from '../../../domain/interfaces/branch.interface';

/**
 * Servicio de sucursales.
 *
 * @remarks
 * Se encarga de generar y retornar el listado
 * de sucursales solicitado por el controlador.
 */
export class BranchesService {

  /**
   * Obtiene un listado de sucursales.
   *
   * @param countBranches - Cantidad de sucursales a generar.
   * @returns Arreglo de sucursales.
   */
  getAllBranches(countBranches: number): Branch[] {
    const branches: Branch[] = [];

    for (let i = 1; i <= countBranches; i++) {
      branches.push({
        id: i,
        name: `Sucursal ${i}`,
        city: `Ciudad ${i}`,
        address: `Dirección ${i}`,
        status: i % 2 === 0 ? 'Activa' : 'Inactiva',
      });
    }

    return branches;
  }
}