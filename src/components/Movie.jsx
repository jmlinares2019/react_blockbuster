import { Link } from "react-router-dom"

import { FaAngleLeft } from 'react-icons/fa6';
import { FaStar } from "react-icons/fa6";
// import { GoPerson } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import posterPlaceholder from "/img/poster_placeholder.png"

const Movie = ({ movie }) => {

    return (
        <>
            <div className="row back-results">
                <div className="col">
                    <FaAngleLeft />
                    <Link 
                        className="back-link"
                        to={"/"}>
                        Home
                    </Link>
                </div>
            </div>

            <div className="row title-wrapper">
                <div className="col-auto">
                    <h1 className="movie-title">{movie.Title}</h1>
                </div>
            </div>

            <div className="row metadata-wrapper">
                <div className="col metadata">
                    <span>{movie.Year} · </span>
                    <span>{movie.Runtime} · </span>
                    <span>{movie.Country} · </span>
                    <span>{movie.Type}</span>
                </div>
                <div className="col ratings">
                    <FaStar />
                    <span className="rating">{`${movie.imdbRating}/10`}</span>
                    <GoPersonFill />
                    <span className="ratings-count">{movie.imdbVotes}</span>
                </div>
            </div>

            <div className="row main-wrapper">
                <div className="col-md-6 img-col">
                    <img 
                        className="poster"
                        src={movie.Poster !== "N/A" ? movie.Poster : posterPlaceholder} 
                        alt={`${movie.Title} (${movie.Year})`} 
                />
                </div>
                <div className="col-md-6 contents-col">
                    <div className="genres">
                    {/* Genres come in a string, but I need them as an array */}
                    {/* {(movie?.Genre.split(",")).map((genre) => (
                        <span className="genre">{genre}</span>
                    ))} */}
                    </div>
                    <p className="plot">{movie.Plot}</p>
                    <div className="crew">
                        <p className="director"><span className="position">Director: </span>{movie.Director}</p>
                        <p className="writers"><span className="position">Writers: </span> {movie.Writer}</p>
                        <p className="cast"><span className="position">Cast: </span> {movie.Actors}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie