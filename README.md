FlickTrack - Movie Management API


This project is a RESTful API for managing a movie collection, built with Node.js, Express, and MongoDB. The setup follows a well-organized structure, using controllers, services, and a data model for seamless functionality. Key components and features include:

1. Server Setup: The main index.js file initializes an Express server, connects to a MongoDB database (FlickTrack), and incorporates essential middlewares for JSON handling and CORS support.
2. Movie Controller: Routes in the moviesController handle core endpoints for:
 - GET /movies: Fetching all movies.

 - GET /movies: Fetching a movie by its ID.
 
 - POST /movies: Adding a new movie to the database.
  
 - PUT /movies: Updating an existing movie’s details.
 
 - DELETE /movies: Removing a movie by ID. Each route uses async functions to handle requests and send JSON responses.
 

3. Movie Service: The moviesService module handles all database interactions using Mongoose. Key functions include:
getAllMovies, getMovieById, createMovie, updateMovie, and deleteMovie, each managing data persistence and updates in MongoDB.

4. Movie Model: Defines the movieSchema with name and releaseDate fields using Mongoose. This schema serves as the blueprint for the movie documents stored in MongoDB.
