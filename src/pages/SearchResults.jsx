import React, { useEffect } from 'react'

import MovieCard from '../components/MovieCard'
import NoMovies from '../components/NoMovies'
import Loader from '../components/Loader'

const SearchResults = ({ searchBackMovies, searched, movies, loading }) => {

    const reSearchTeam = sessionStorage.getItem("searchTerm");
    useEffect(() => {
        if(reSearchTeam !== null){
            searchBackMovies(reSearchTeam);
        }
    }, []);
    
    return (
    <div className="container">
        <div className="row">
        { loading ? 
            <Loader />
        :
            ( searched && movies === undefined ? 
                <NoMovies />
            :
                <>
                {movies?.map((movie, index) => (
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard 
                            key={index}
                            movie={movie} 
                        />
                    </div>
                ))}
                </>
            )
        }
        </div>
    </div>  
    )
}

export default SearchResults