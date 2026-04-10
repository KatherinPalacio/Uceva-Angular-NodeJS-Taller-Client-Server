/**
 * Representa una sucursal dentro del sistema.
 *
 * @remarks
 * Esta interfaz define los datos enviados
 * por la API de sucursales al frontend.
 */
export interface Branch {
  /** Identificador único de la sucursal */
  id: number;

  /** Nombre de la sucursal */
  name: string;

  /** Ciudad donde se encuentra la sucursal */
  city: string;

  /** Dirección física de la sucursal */
  address: string;

  /** Estado actual de la sucursal */
  status: string;
}