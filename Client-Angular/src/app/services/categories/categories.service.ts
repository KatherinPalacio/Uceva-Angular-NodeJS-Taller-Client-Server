import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';

/**
 * Servicio de categorías.
 *
 * @remarks
 * Permite consumir la API de categorías
 * expuesta por el backend.
 */
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly apiUrl = 'api/categories';

  constructor(private readonly http: HttpClient) {}

  /**
   * Obtiene el listado de categorías.
   *
   * @param count - Cantidad de categorías a solicitar.
   * @returns Observable con el arreglo de categorías.
   */
  getCategories(count: number): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/${count}`);
  }
}