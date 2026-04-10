import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/order.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly apiUrl = 'api/orders';

  constructor(private http: HttpClient) {}

  getOrders(count: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/${count}`);
  }
}