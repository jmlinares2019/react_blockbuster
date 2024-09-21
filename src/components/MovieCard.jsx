import { Link } from "react-router-dom"

import posterPlaceholder from "/img/poster_placeholder.png";

function MovieCard({ movie }){

    return(
      <div 
        className="movie">
          <div>
            <p className="year">{movie.Year}</p>
          </div>
          <div>
            <img 
              src={movie.Poster !== "N/A" ? 
                movie.Poster 
              : 
                posterPlaceholder} 
              alt={movie.Title}
            />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            <Link
              to={`/movie/${movie.imdbID}`}>
              See more
            </Link>
          </div>
      </div>   
    )
}

export default MovieCard