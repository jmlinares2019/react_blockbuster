import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie";
import Loader from "../components/Loader";

const MovieDetails = ({ fetchMovieDetails, movieDetails, loading }) => {
    
    const { id } = useParams();

    useEffect(() => {
        fetchMovieDetails(id);
    }, [])

    return (
        <div className="container">
        { loading ? 
            <Loader />
        :
            <div className="movie-details">
                <Movie movie={movieDetails} />
            </div>
        }
        </div> 
    )
}

export default MovieDetails