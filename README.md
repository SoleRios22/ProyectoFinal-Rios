
# Tienda Online - Proyecto Final React Coderhouse


## Descripción

Este proyecto es una tienda online desarrollada como trabajo final del curso de React en Coderhouse.
Permite a los usuarios explorar productos, agregarlos a un carrito de compras, gestionar cantidades y finalizar la compra mediante un formulario de checkout. 

## Tecnologías utilizadas

- React (Hooks, Context API, Router)

- Firebase Firestore (base de datos para órdenes)

- React Router Dom (navegación SPA)

- React Icons (iconos)

- SweetAlert2 (alertas personalizadas)

- CSS (estilos propios y responsividad)

## Características principales

- Listado dinámico de productos con filtrado por categorías

- Carrito de compras con gestión de cantidades y límite según stock disponible

- Modal y alertas visuales para mejores interacciones

- Formulario de checkout con validación y envío de orden a Firestore

- Persistencia del carrito usando Context API

- Diseño responsive para dispositivos móviles y desktop

## Instalación y configuración

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```
2. Instalar dependencias:

```bash
npm install
```
3. Configurar Firebase:

    - Crear un proyecto en Firebase

    - Obtener configuración de Firestore y agregarla en src/db/db.js

4. Ejecutar el proyecto en modo desarrollo:

```bash
npm start
```

## Uso
- Navegar entre categorías y productos.

- Agregar productos al carrito, controlando la cantidad máxima según stock.

- Visualizar y modificar el carrito, eliminar productos o vaciarlo.

- Finalizar compra completando el formulario de checkout.

- Recibir confirmación con ID de orden generada.

## Autor

Proyecto desarrollado por Soledad Rios para el curso de React en Coderhouse.