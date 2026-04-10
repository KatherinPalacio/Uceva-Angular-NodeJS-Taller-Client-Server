/**
 * Representa un pedido dentro del sistema.
 *
 * @remarks
 * Esta interfaz define la estructura de los datos
 * que recibe el frontend desde la API de pedidos.
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;

  /** Nombre del cliente que realizó el pedido */
  customerName: string;

  /** Nombre del producto solicitado */
  productName: string;

  /** Cantidad de unidades solicitadas */
  quantity: number;

  /** Valor total del pedido */
  total: number;

  /** Estado actual del pedido */
  status: string;
}