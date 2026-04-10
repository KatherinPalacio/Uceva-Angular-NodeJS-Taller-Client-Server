import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';

/**
 * Servicio encargado de gestionar las operaciones
 * relacionadas con las categorías.
 *
 * @remarks
 * Permite consultar las categorías disponibles
 * desde la API del backend.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  /** Servicio HttpClient para realizar peticiones HTTP */
  private readonly http = inject(HttpClient);

  /**
   * Obtiene una lista de categorías desde el backend.
   *
   * @param count Cantidad de categorías que se desea consultar.
   * @returns Observable con la lista de categorías.
   */
  getCategories(count: number): Observable<Category[]> {
    return this.http.get<Category[]>(`api/categories/${count}`);
  }
}