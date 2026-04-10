import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { OrdersService } from './orders.service';
import { Order } from '../../interfaces/order.interface';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  const mockOrders: Order[] = [
    {
      id: 1,
      customerName: 'Cliente 1',
      productName: 'Producto 1',
      quantity: 2,
      total: 50000,
      status: 'Pendiente',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe obtener pedidos desde la API', () => {
    service.getOrders(10).subscribe((orders) => {
      expect(orders).toEqual(mockOrders);
    });

    const req = httpMock.expectOne('api/orders/10');
    expect(req.request.method).toBe('GET');
    req.flush(mockOrders);
  });
});