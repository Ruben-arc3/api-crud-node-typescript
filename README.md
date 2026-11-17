# API CRUD de cursos, estudiantes y profesores

API académica construida con Node.js, Express, TypeScript, TypeORM y MySQL. Expone operaciones CRUD para cursos, estudiantes y profesores, además de servir las vistas ubicadas en `src/views`.

## Requisitos

- Node.js y npm.
- MySQL o MariaDB.

## Configuración y ejecución

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea la base de datos `cursos` e importa el esquema y los datos de ejemplo desde `src/db/cursos.sql`.

3. Configura host, puerto, usuario, contraseña y nombre de la base de datos en `src/db/conexion.ts` para que coincidan con tu instalación local.

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

La API queda disponible en `http://localhost:3000`.

## Rutas

| Recurso | Método | Ruta | Acción |
| --- | --- | --- | --- |
| Cursos | GET | `/cursos` | Lista cursos con profesor y estudiantes relacionados. |
| Cursos | POST | `/cursos` | Crea un curso asociado a un profesor existente. |
| Cursos | GET | `/cursos/:id` | Consulta un curso por ID. |
| Cursos | PUT | `/cursos/:id` | Actualiza un curso. |
| Cursos | DELETE | `/cursos/:id` | Elimina un curso. |
| Estudiantes | GET/POST | `/estudiantes` | Lista o crea estudiantes. |
| Estudiantes | GET/PUT/DELETE | `/estudiantes/:id` | Consulta, actualiza o elimina un estudiante. |
| Profesores | GET/POST | `/profesores` | Lista o crea profesores. |
| Profesores | GET/PUT/DELETE | `/profesores/:id` | Consulta, actualiza o elimina un profesor. |

Las operaciones de creación y actualización reciben JSON. Por ejemplo, para crear un estudiante:

```json
{
  "cedula": "123456",
  "nombre": "Ana",
  "apellido": "Pérez",
  "email": "ana@example.com"
}
```

La ruta `/` devuelve una respuesta sencilla y el servidor publica las vistas de `src/views` como archivos estáticos.
