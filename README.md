# Project Name

## [Viewr](https://viewr-app.netlify.app)

![App Logo](./src/assets/presentacion/VIEWR-logo-fondo.png)

## Description

Viewr is your ultimate destination for discovering, exploring, and celebrating the world of movies and television. Whether you're a cinephile, TV enthusiast, or casual viewer, Viewr offers a comprehensive platform to satisfy your entertainment cravings.

#### [Client Repo](https://github.com/josepcliment92/Viewr-app)
#### [Server Repo](https://github.com/Abranucu/Viewr-server)

## Technologies, Libraries & APIs used

- HTML
- CSS
- Javascript
- JSX
- Vite
- React
- Axios
- Bootstrap
- Node.js
- Netlify
- Adaptable

## Backlog Functionalities

- To add an option to check "Watched", "Currently Watching" or "Want to Watch" on each letter
- Improve responsiveness on all types of devices

# Client Structure

## User Stories

- **Read information** - The user can consult the details of a movie or series, obtained from an external API. They can also read the reviews added by other users. 
- **Filter information** - The user can filter the results alphabetically or through a customised search. 
- **Create reviews** - The user can add a review with their name, opinion and rating about any film or series. 
- **Edit reviews** - The user can edit a review and modify any of their aspects: name, opinion and rating.
- **Delete reviews** - The user can delete reviews, which will no longer appear neither in the detail of each series/movie nor on the homepage.
- **Error handling** - In the event of a page loading failure, non-existent URLs or any other error, the user is invited to return to the homepage. 

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

[Slides Link](./src/assets/presentacion/VIEWR-presentacion.pdf)
