import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const MovieDetails = () => {

    const { id } = useParams(); 
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        async function fetchMovieDetails(id){
            console.log(id);
            try{
            const res = await fetch(`http://www.omdbapi.com/?apikey=df6ac670&i=${id}`);
            const data = await res.json();
            console.log(data);
            setMovieDetails(data);
            console.log(movieDetails);  
            } catch(error) {
            console.log(error);
            }
        }
        fetchMovieDetails(id);
    }, []);

    return (
        <div>MovieDetails {id}</div> 
    )
}

export default MovieDetails