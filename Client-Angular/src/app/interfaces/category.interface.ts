/**
 * Representa una categoría dentro del sistema.
 *
 * @remarks
 * Esta interfaz se usa para tipar la información
 * recibida desde la API de categorías.
 */
export interface Category {
  /** Identificador único de la categoría */
  id: number;

  /** Nombre de la categoría */
  name: string;

  /** Descripción general de la categoría */
  description: string;

  /** Estado actual de la categoría */
  status: string;
}