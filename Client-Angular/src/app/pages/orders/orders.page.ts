import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../services/orders/orders.service';
import { Order } from '../../interfaces/order.interface';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.page.html',
  styleUrl: './orders.page.scss'
})
export class OrdersPage implements OnInit {

  private readonly ordersService = inject(OrdersService);

  public orders: Order[] = [];
  public isLoading = true;
  public errorMessage = '';

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.ordersService.getOrders(10).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar los pedidos.';
        this.isLoading = false;
      }
    });
  }
}