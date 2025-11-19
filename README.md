# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Descripción del proyecto
Este proyecto es una aplicación web de gestión de tareas (Todos) desarrollada con **React** y **Vite**. Permite a los usuarios navegar entre diferentes páginas, crear nuevas tareas, marcar tareas como completadas o pendientes, y eliminarlas. La información se obtiene de una **API REST** simulada (JSONPlaceholder).

---

## Tecnologías utilizadas
- React 18
- Vite
- HTML5 & CSS3
- JavaScript ES6+
- Fetch API para consumir datos

---

## Estructura del proyecto

---todo-app/
├─ node_modules/
├─ public/
├─ src/
│ ├─ assets/ # imágenes e íconos
│ ├─ components/
│ │ └─ Todos.jsx # lista de todos con toggle y eliminar
│ ├─ pages/
│ │ ├─ Home.jsx # página de bienvenida
│ │ ├─ Registro.jsx # formulario para agregar nuevos todos
│ │ └─ TodosPage.jsx # página que muestra lista de todos
│ ├─ App.jsx # rutas y menú
│ ├─ main.jsx # renderiza App
│ └─ index.css / App.css # estilos
├─ package.json
├─ package-lock.json
└─ vite.config.js

## Funcionalidades implementadas
1. **Navegación entre páginas:**  
   - Home `/`
   - Todos `/todos`
   - Registro `/registro`
2. **Listado de todos:**  
   - Obtención de datos desde API REST  
   - Mostrar estado: Pendiente / Completado  
   - Toggle de estado  
   - Eliminar todos
3. **Formulario de registro:**  
   - Captura de nuevos todos  
   - Validación básica (input requerido)  
   - Muestra los datos en la consola
4. **Manejo básico de errores y estados de carga** (opcional)

---

## Cómo ejecutar el proyecto
1. Clonar el repositorio:
```bash
git clone https://github.com/samueltrabajos-de-los-martes/todo-app.git
Entrar a la carpeta del proyecto:cd todo-app
Instalar dependencias:npm install
Ejecutar la app:npm run dev
Abrir el navegador en la URL que indique Vite (por ejemplo
http://localhost:5173/).

Video de demostración:
Autor:Samuel David Polo Montero
Notas:Proyecto desarrollado como práctica de React con Vite para la guía GA1-220501096-03-AA1-EV10.
