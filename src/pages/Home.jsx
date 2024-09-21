import { useState } from "react";

import MovieCard from "../components/MovieCard";

import searchIcon from "../search.svg"

function Home(){

    const API_URL = "http://www.omdbapi.com/?apikey=df6ac670";

    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState(false);
    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const searchMovies = async (search) => {
        console.log(search);
        setSearched(true);
        try{
        const res = await fetch(`${API_URL}&s=${search}`);
        const moviesData = await res.json();
        console.log(moviesData.Search);
        setMovies(moviesData.Search);
        } catch(err) {
        console.log(err);
        }
    }

    return(
        <>
        <h1>MovieLand</h1>
        <div className="search">
            <input 
                type="text"
                placeholder="Search a movie"
                onChange={handleInput}
                value={search}
            />
            <img 
                src={searchIcon}
                alt="search"
                onClick={() => searchMovies(search)}
            />
        </div>
        { searched && movies === undefined ? 
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        :
            <div className="container">
            {movies?.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
            </div>
        }
        </>
    )
}

export default Home



