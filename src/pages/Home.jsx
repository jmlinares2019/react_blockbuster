import MovieCard from "../components/MovieCard";

import Loader from "../components/Loader";
import { useEffect } from "react";

function Home({ fetchRandomMovie, randomMovie, loading }){

    const isHome = true;

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-8 intro">
                        <h1 className="home-title">Welcome to KinoLand!</h1>
                        <p>This is a simple movie library built in React 18 over Vite environment, as a personal project for learning purposes. Feel free to search and browse movies. The results and information are provided by the 
                            <a 
                                href="https://www.omdbapi.com/"
                                target="_blank"
                                className="omdb-link">
                                OMDB (Open Movie DataBase) API
                            </a>.
                        </p>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 movie-of-day">
                        <h2 className="suggested-movie-title">Have you seen... ?</h2>
                        <div className="row moviecard-wrapper">
                        { loading ? 
                            <Loader />
                        :
                            <MovieCard
                                isHome={isHome} 
                                movie={randomMovie}
                            />
                        }    
                        </div>
                    </div>        
                </div>
                
            </div>
            
    )
}

export default Home



