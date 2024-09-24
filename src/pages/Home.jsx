import MovieCard from "../components/MovieCard";

import Loader from "../components/Loader";

function Home({ searched, movies, loading }){

    return(
        <>
        <div className="container">
            <div className="row">
            { loading ? 
                <Loader />
            :
                ( searched && movies === undefined ? 
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                :
                    <>
                    {movies?.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                    </>
                )
            }
            </div>
        </div>        
        </>
    )
}

export default Home



