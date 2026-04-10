import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order.interface';

/**
 * Servicio encargado de gestionar las operaciones
 * relacionadas con los pedidos.
 *
 * @remarks
 * Este servicio consume la API del backend para
 * obtener la lista de pedidos disponibles.
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /** Servicio HttpClient para realizar peticiones HTTP */
  private readonly http = inject(HttpClient);

  /**
   * Obtiene una lista de pedidos desde el backend.
   *
   * @param count Cantidad de pedidos que se desea consultar.
   * @returns Observable con la lista de pedidos.
   */
  getOrders(count: number): Observable<Order[]> {
    return this.http.get<Order[]>(`api/orders/${count}`);
  }
}