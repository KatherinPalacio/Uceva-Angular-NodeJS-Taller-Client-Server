import { Component, inject, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order.interface';
import { OrdersService } from '../../services/orders/orders.service';

/**
 * Página encargada de mostrar el listado de pedidos.
 *
 * @remarks
 * Esta vista consume el servicio de pedidos para
 * obtener la información desde el backend y
 * presentarla en pantalla.
 */
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  /** Lista de pedidos obtenidos desde la API */
  public orders: Order[] = [];

  /** Indica si la página se encuentra cargando datos */
  public isLoading = false;

  /** Mensaje de error en caso de fallo al consultar la API */
  public errorMessage = '';

  /** Servicio de pedidos */
  private readonly ordersService = inject(OrdersService);

  /**
   * Método del ciclo de vida de Angular que se ejecuta
   * al inicializar el componente.
   */
  ngOnInit(): void {
    this.loadOrders();
  }

  /**
   * Carga la lista de pedidos desde el backend.
   */
  loadOrders(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.ordersService.getOrders(10).subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar los pedidos.';
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}