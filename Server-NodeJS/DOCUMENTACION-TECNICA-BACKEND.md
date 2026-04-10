# Documentación técnica del backend

## Descripción general
Este backend fue desarrollado con Node.js y Express, siguiendo una arquitectura modular basada en separación de responsabilidades. Su función principal es exponer APIs que son consumidas por la aplicación cliente en Angular mediante HTTP.

## Tecnologías usadas
- Node.js
- Express
- TypeScript
- Swagger
- Faker.js

## Estructura del proyecto
La aplicación se encuentra organizada por módulos y capas, respetando la arquitectura base entregada en el repositorio del docente.

### Carpetas principales
- `src/config`: configuración general del servidor y Swagger.
- `src/domain/interfaces`: definición de interfaces del dominio.
- `src/presentation/modules`: módulos funcionales del sistema.
- `src/presentation/routes.ts`: centraliza las rutas principales.
- `src/presentation/server.ts`: configuración del servidor Express.

## Módulos implementados
El backend contiene los módulos base del proyecto y los nuevos módulos desarrollados para el taller:

- Users
- Products
- Orders
- Categories
- Branches

## Endpoints disponibles
### Módulos base
- `GET /api/users/:countUsers`
- `GET /api/products/:countProducts`

### Nuevos módulos
- `GET /api/orders/:countOrders`
- `GET /api/categories/:countCategories`
- `GET /api/branches/:countBranches`

## Uso de faker.js
Para la generación de datos simulados en los módulos del backend se utilizó la librería Faker.js. Esto permite retornar información aleatoria y dinámica al cliente sin necesidad de una base de datos real.

## Documentación de APIs con Swagger
La documentación de los endpoints se encuentra disponible a través de Swagger en la ruta:

`/api/docs`

Desde allí se pueden visualizar los endpoints, sus parámetros, respuestas y realizar pruebas directamente desde la interfaz.

## Ejecución del proyecto
Para ejecutar el backend en entorno local se deben seguir estos pasos:

```bash
npm install
npm run dev