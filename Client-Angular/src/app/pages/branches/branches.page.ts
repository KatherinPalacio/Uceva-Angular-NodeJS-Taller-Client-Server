import { Component, inject, OnInit } from '@angular/core';
import { Branch } from '../../interfaces/branch.interface';
import { BranchesService } from '../../services/branches/branches.service';

/**
 * Página encargada de mostrar el listado de sucursales.
 *
 * @remarks
 * Esta vista consume el servicio de sucursales para
 * obtener y mostrar la información enviada por el backend.
 */
@Component({
  selector: 'app-branches',
  templateUrl: './branches.page.html',
  styleUrls: ['./branches.page.scss'],
})
export class BranchesPage implements OnInit {
  /** Lista de sucursales obtenidas desde la API */
  public branches: Branch[] = [];

  /** Indica si la página se encuentra cargando datos */
  public isLoading = false;

  /** Mensaje de error en caso de fallo al consultar la API */
  public errorMessage = '';

  /** Servicio de sucursales */
  private readonly branchesService = inject(BranchesService);

  /**
   * Método del ciclo de vida que se ejecuta
   * al inicializar el componente.
   */
  ngOnInit(): void {
    this.loadBranches();
  }

  /**
   * Carga la lista de sucursales desde el backend.
   */
  loadBranches(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.branchesService.getBranches(10).subscribe({
      next: (branches) => {
        this.branches = branches;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar las sucursales.';
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}