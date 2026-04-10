import { Category } from '../../../domain/interfaces/category.interface';

/**
 * Servicio de categorías.
 *
 * @remarks
 * Se encarga de generar y retornar el listado
 * de categorías solicitado por el controlador.
 */
export class CategoriesService {

  /**
   * Obtiene un listado de categorías.
   *
   * @param countCategories - Cantidad de categorías a generar.
   * @returns Arreglo de categorías.
   */
  getAllCategories(countCategories: number): Category[] {
    const categories: Category[] = [];

    for (let i = 1; i <= countCategories; i++) {
      categories.push({
        id: i,
        name: `Categoría ${i}`,
        description: `Descripción de la categoría ${i}`,
        status: i % 2 === 0 ? 'Activa' : 'Inactiva',
      });
    }

    return categories;
  }
}