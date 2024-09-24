import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Loader from "../components/Loader";


const MovieDetails = () => {

    const { id } = useParams(); 
    const navigateTo = useNavigate();
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);

    // Fetching single movie data
    useEffect(() => {
        async function fetchMovieDetails(id){
            console.log(id);
            try{
                const res = await fetch(`http://www.omdbapi.com/?apikey=df6ac670&i=${id}&plot=full`);
                const data = await res.json();
                console.log(data);
                setMovieDetails(data);
            } catch(error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieDetails(id);
    }, []);

    function goBack(){
        navigateTo(-1);
    }

    return (
        <div className="container justify-content-start">
        { loading ? 
            <Loader />
        :
        <>
        <div className="row">
            <div className="col">
                <Link 
                    className="go-back"
                    onClick={() => goBack()}>
                    Go back
                </Link>
            </div>
        </div>
            <div className="row title-wrapper">
                <div className="col-auto">
                    <h1 className="movie-title">{movieDetails.Title}</h1>
                </div>
            </div>
            <div className="row basic-metadata-wrapper">
                <div className="col-auto">
                    <span>{movieDetails.Year} · </span>
                    <span>{movieDetails.Runtime} · </span>
                    <span>{movieDetails.Type}</span>
                </div>
            </div>
            <div className="row img-plot-wrapper">
                <div className="col-6 img-col">
                    <img src={movieDetails.Poster} alt={`${movieDetails.Title} (${movieDetails.Year})`} />
                </div>
                <div className="col-6 contents-col">
                    <div className="genres">
                    {/* Genres come in a string, but I need them as an array */}
                    {/* {(movieDetails?.Genre.split(",")).map((genre) => (
                        <span className="genre">{genre}</span>
                    ))} */}
                    </div>
                    <p className="plot">{movieDetails.Plot}</p>
                    <div className="ratings">
                        <span className="rating">{`${movieDetails.imdbRating}/10`} | </span>
                        <span className="ratings-count">{movieDetails.imdbVotes}</span>
                    </div>
                    <p className="director">Director: {movieDetails.Director}</p>
                    <p className="writers">Writers: {movieDetails.Writer}</p>
                    <p className="cast">Cast: {movieDetails.Actors}</p>
                </div>
            </div>
            </>
        }
        </div> 
    )
}

export default MovieDetails