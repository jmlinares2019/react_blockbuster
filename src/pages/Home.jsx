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
                        <h1>Welcome to KinoLand!</h1>
                        <p>Esse eu ad officia voluptate aute. Nisi deserunt ad laboris sunt dolore ut laboris cupidatat non non ex proident laboris. Veniam cillum cillum Lorem sint in amet ea proident magna voluptate occaecat. Anim nulla ex exercitation excepteur exercitation anim reprehenderit ea anim minim id.</p>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 movie-of-day">
                        <div className="row home-title">
                            <h2>Have you seen... ?</h2>
                        </div>
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



