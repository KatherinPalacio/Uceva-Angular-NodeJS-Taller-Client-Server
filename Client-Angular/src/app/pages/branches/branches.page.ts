import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Branch } from '../../interfaces/branch.interface';
import { BranchesService } from '../../services/branches/branches.service';

/**
 * Página de sucursales.
 *
 * @remarks
 * Este componente se encarga de mostrar
 * el listado de sucursales obtenidas desde el backend.
 */
@Component({
  selector: 'app-branches-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branches.page.html',
  styleUrl: './branches.page.scss'
})
export class BranchesPage implements OnInit {

  private readonly branchesService = inject(BranchesService);

  public branches: Branch[] = [];
  public isLoading = true;
  public errorMessage = '';

  ngOnInit(): void {
    this.loadBranches();
  }

  /**
   * Carga el listado de sucursales desde el servicio.
   */
  loadBranches(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.branchesService.getBranches(10).subscribe({
      next: (branches) => {
        this.branches = branches;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No fue posible cargar las sucursales.';
        this.isLoading = false;
      }
    });
  }
}