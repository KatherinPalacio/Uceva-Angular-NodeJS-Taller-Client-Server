import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../../interfaces/branch.interface';

/**
 * Servicio de sucursales.
 *
 * @remarks
 * Permite consumir la API de sucursales
 * expuesta por el backend.
 */
@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  private readonly apiUrl = 'api/branches';

  constructor(private readonly http: HttpClient) {}

  /**
   * Obtiene el listado de sucursales.
   *
   * @param count - Cantidad de sucursales a solicitar.
   * @returns Observable con el arreglo de sucursales.
   */
  getBranches(count: number): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${this.apiUrl}/${count}`);
  }
}