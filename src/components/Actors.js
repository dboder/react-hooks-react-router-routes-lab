import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map(
    actor => 
    <div> 
      {actor.name}
     {actor.movies.map(movie => <ul>{movie}</ ul>)}
    </div>);

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>);
}

export default Actors;
