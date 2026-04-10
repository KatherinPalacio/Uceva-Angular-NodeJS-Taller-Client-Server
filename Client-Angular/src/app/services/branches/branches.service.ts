import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../../interfaces/branch.interface';

/**
 * Servicio encargado de gestionar las operaciones
 * relacionadas con las sucursales.
 *
 * @remarks
 * Este servicio consume la API del backend para
 * obtener la información de las sucursales.
 */
@Injectable({
  providedIn: 'root',
})
export class BranchesService {
  /** Servicio HttpClient para realizar peticiones HTTP */
  private readonly http = inject(HttpClient);

  /**
   * Obtiene una lista de sucursales desde el backend.
   *
   * @param count Cantidad de sucursales que se desea consultar.
   * @returns Observable con la lista de sucursales.
   */
  getBranches(count: number): Observable<Branch[]> {
    return this.http.get<Branch[]>(`api/branches/${count}`);
  }
}