/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa un pedido del sistema
 *       required:
 *         - id
 *         - customerName
 *         - productName
 *         - quantity
 *         - total
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customerName:
 *           type: string
 *           example: Ana Gómez
 *         productName:
 *           type: string
 *           example: Teclado mecánico
 *         quantity:
 *           type: number
 *           example: 2
 *         total:
 *           type: number
 *           example: 120000
 *         status:
 *           type: string
 *           example: Pendiente
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa una categoría del sistema
 *       required:
 *         - id
 *         - name
 *         - description
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Tecnología
 *         description:
 *           type: string
 *           example: Productos tecnológicos y accesorios
 *         status:
 *           type: string
 *           example: Activa
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       description: Representa una sucursal del sistema
 *       required:
 *         - id
 *         - name
 *         - city
 *         - address
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Sucursal Tuluá
 *         city:
 *           type: string
 *           example: Tuluá
 *         address:
 *           type: string
 *           example: Calle 26 # 15-40
 *         status:
 *           type: string
 *           example: Activa
 */
export {};