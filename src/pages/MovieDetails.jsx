import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Loader from "../components/Loader";

import { FaAngleLeft } from 'react-icons/fa6';
import { FaRegStar } from "react-icons/fa";
import { GoPerson } from "react-icons/go";


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
        <div className="container movie-details">
        { loading ? 
            <Loader />
        :
        <>
        <div className="row back-results">
            <div className="col">
                <FaAngleLeft />
                <Link 
                    className="back-link"
                    onClick={() => goBack()}>
                    Back to results
                </Link>
            </div>
        </div>
            <div className="row title-wrapper">
                <div className="col-auto">
                    <h1 className="movie-title">{movieDetails.Title}</h1>
                </div>
            </div>
            <div className="row metadata-wrapper">
                <div className="col metadata">
                    <span>{movieDetails.Year} · </span>
                    <span>{movieDetails.Runtime} · </span>
                    <span>{movieDetails.Type}</span>
                </div>
                <div className="col ratings">
                    <FaRegStar />
                    <span className="rating">{`${movieDetails.imdbRating}/10`}</span>
                    <GoPerson />
                    <span className="ratings-count">{movieDetails.imdbVotes}</span>
                </div>
            </div>
            <div className="row main-wrapper">
                <div className="col-md-6 img-col">
                    <img src={movieDetails.Poster} alt={`${movieDetails.Title} (${movieDetails.Year})`} />
                </div>
                <div className="col-md-6 contents-col">
                    <div className="genres">
                    {/* Genres come in a string, but I need them as an array */}
                    {/* {(movieDetails?.Genre.split(",")).map((genre) => (
                        <span className="genre">{genre}</span>
                    ))} */}
                    </div>
                    <p className="plot">{movieDetails.Plot}</p>
                    <div className="crew">
                        <p className="director"><span className="position">Director: </span>{movieDetails.Director}</p>
                        <p className="writers"><span className="position">Writers: </span> {movieDetails.Writer}</p>
                        <p className="cast"><span className="position">Cast: </span> {movieDetails.Actors}</p>
                    </div>
                    
                </div>
            </div>
            </>
        }
        </div> 
    )
}

export default MovieDetails