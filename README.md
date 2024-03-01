# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Name

## [Viewr](https://viewr-app.netlify.app)

![App Logo]("../assets/img/viewr-logo.png")

## Description

Viewr is your ultimate destination for discovering, exploring, and celebrating the world of movies and television. Whether you're a cinephile, TV enthusiast, or casual viewer, Viewr offers a comprehensive platform to satisfy your entertainment cravings.

#### [Client Repo here](https://github.com/josepcliment92/Viewr-app)
#### [Server Repo here](https://github.com/Abranucu/Viewr-server)

## Technologies, Libraries & APIs used

**NOTE -** List here all technologies used in the project like HTML, CSS, Javascript, React, axios, Bootstrap, etc.
- HTML
- CSS
- Javascript
- JSX
- Vite
- React
- Axios
- Bootstrap
- Netlify
- Adaptable

## Backlog Functionalities

- Añadir la opción de marcar "Watched", "Currently Watching" o "Want to Watch" en cada carta
- Mejorar la responsividad en todo tipo de dispositivos

# Client Structure

## User Stories

- **Leer información** - El usuario puede consultar los detalles de una película o serie, obtenidos de una API externa. También puede leer las reseñas que añaden el resto de usuarios y las suyas propias. 
- **Filtrar información** - El usuario puede filtrar los resultados por orden alfabético o a través de una búsqueda personalizada. 
- **Crear reseñas** - El usuario puede añadir una reseña con su nombre, opinión y puntuación a una película o serie. 
- **Editar reseñas** - El usuario puede editar una reseña y modificar cualquiera de los datos: nombre, opinión y puntuación. 
- **Eliminar reseñas** - El usuario puede eliminar reseñas, que dejan de aparecer tanto en el detalle de cada serie/película como en la Homepage.
- **Gestión de errores** - Ante un fallo a la hora de cargar una página, URLs inexistentes o cualquier otro error se invita al usuario a volver a la Homepage. 

## Client Routes

## React Router Routes (React App)
| Path                      | Page            | Components                          | Behavior                                                      |
| ------------------------- | ----------------| ----------------------------------- |  ------------------------------------------------------------ |
| `/`                       | Start           |                                     | Start Page, navigate to Home                                  |
| `/home`                   | Home            | LastReviews                         | Show last reviews, Access to Navbar                           |
| `/list-shows`             | All Shows       | FilterShows, ShowCard               | Show list of shows, filter shows by letter                    |
| `/list-shows/:showId`     | Details Show    | DetailsCard, ReviewForm, ReviewCard | Show details of an specific show, add, edit and delete reviews|
| `/about`                  | About           |                                     | Show information about us                                     |
| `/not-found`              | Not Found       |                                     | Redirect to Home                                              |
| `/error`                  | Error           |                                     | Redirect to Home                                              |

## Other Components

- Navbar
- Search Bar
- Edit Review Form
  
## Links

### Collaborators

[Abraham Castiello](https://github.com/Abranucu/)

[Josep Climent](https://github.com/josepcliment92/)

### Project

[Repository Link Client](https://github.com/josepcliment92/Viewr-app)

[Repository Link Server](https://github.com/Abranucu/Viewr-server)

[Deploy Link](https://viewr-app.netlify.app)

### Slides

[Slides Link](www.your-slides-url-here.com)
