import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map(
    movie => 
    <div> 
      {movie.title},{movie.time}
      <ul>{movie.genres.map(genre =><li>{genre}</li>)}</ul>
    </div>);
  return (
  <div>
    <h1>Movies Page</h1>
    <div>
      {movieList}
    </div>
  </div>);
}

export default Movies;
