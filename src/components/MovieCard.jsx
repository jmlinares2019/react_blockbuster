import posterPlaceholder from "/img/poster_placeholder.png";

function MovieCard({ movie }){

    return(
      <div className="movie-card">
        <a 
          className="details-link" 
          href={`/movie/${movie.imdbID}`}>
            <div>
              <img 
                className="item-poster"
                src={movie.Poster !== "N/A" ? movie.Poster : posterPlaceholder} 
                alt={movie.Title}
              />
            </div>
            <div className="item-info">
              <span className="item-type">{movie.Type}</span>
              <h3 className="item-title">{movie.Title}</h3>
              <p className="item-year">{movie.Year}</p>
            </div>
        </a>
      </div>   
    )
}

export default MovieCard