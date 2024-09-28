import React from 'react'

import MovieCard from '../components/MovieCard'
import Loader from '../components/Loader'

const SearchResults = ({ searched, movies, loading }) => {
    
    return (
    <div className="container">
        <div className="row">
        { loading ? 
            <Loader />
        :
            ( searched && movies === undefined ? 
                <div className="col not-found">
                    <h2>No movies found</h2>
                </div>
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