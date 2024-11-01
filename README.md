# Proyecto de Autenticación con React y Node.js

Este proyecto es una aplicación de autenticación que utiliza React para el frontend y Node.js con Express y MongoDB para el backend.

## Requisitos

- Node.js
- MongoDB

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias del backend:
   ```
   cd backend
   npm install
   ```

3. Instala las dependencias del frontend:
   ```
   cd frontend
   npm install
   ```

## Ejecución

1. Inicia el servidor backend:
   ```
   cd backend
   npm run dev
   ```

2. Inicia la aplicación frontend:
   ```
   cd frontend
   npm run dev
   ```

## Uso

1. Abre tu navegador y navega a `http://localhost:5173/` y en caso de no funcionar, revisar y utilizar  la url que se muestra en la consola desde la cual se inicio la aplicacion frontend.
2. Inicia sesión con el siguiente correo electrónico y contraseña:
   - Correo electrónico: `rodrigo7@gmail.com`
   - Contraseña: `rodrigo7`
3. Después de iniciar sesión, serás redirigido a la página de inicio donde verás un mensaje de bienvenida con tu nombre.

## Estructura del Proyecto

- `backend`: Contiene el código del servidor Node.js con Express y MongoDB.
- `frontend`: Contiene el código de la aplicación React.

## Dependencias

### Backend
- `express`
- `mongoose`
- `bcrypt`
- `jsonwebtoken`
- `cors`

### Frontend
- `react`
- `react-dom`
- `react-router-dom`
- `react-scripts`

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia
Este proyecto está bajo la Licencia MIT.