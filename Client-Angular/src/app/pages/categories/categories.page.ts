import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { CategoriesService } from '../../services/categories/categories.service';

/**
 * Página de categorías.
 *
 * @remarks
 * Este componente se encarga de mostrar
 * el listado de categorías obtenidas desde el backend.
 */
@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.page.html',
  styleUrl: './categories.page.scss'
})
export class CategoriesPage implements OnInit {

  private readonly categoriesService = inject(CategoriesService);

  public categories: Category[] = [];
  public isLoading = true;
  public errorMessage = '';

  ngOnInit(): void {
    this.loadCategories();
  }

  /**
   * Carga el listado de categorías desde el servicio.
   */
  loadCategories(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.categoriesService.getCategories(10).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar las categorías.';
        this.isLoading = false;
      }
    });
  }
}