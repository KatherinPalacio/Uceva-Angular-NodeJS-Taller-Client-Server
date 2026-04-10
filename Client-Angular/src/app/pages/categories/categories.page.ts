import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { CategoriesService } from '../../services/categories/categories.service';

/**
 * Página encargada de mostrar el listado de categorías.
 *
 * @remarks
 * Esta vista obtiene la información desde el backend
 * mediante el servicio de categorías.
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  /** Lista de categorías obtenidas desde la API */
  public categories: Category[] = [];

  /** Indica si la página se encuentra cargando datos */
  public isLoading = false;

  /** Mensaje de error en caso de fallo al consultar la API */
  public errorMessage = '';

  /** Servicio de categorías */
  private readonly categoriesService = inject(CategoriesService);

  /**
   * Método del ciclo de vida que se ejecuta
   * al iniciar el componente.
   */
  ngOnInit(): void {
    this.loadCategories();
  }

  /**
   * Carga la lista de categorías desde el backend.
   */
  loadCategories(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.categoriesService.getCategories(10).subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar las categorías.';
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}