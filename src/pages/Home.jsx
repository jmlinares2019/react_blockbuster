import MovieCard from "../components/MovieCard";

function Home({ searched, movies }){

    return(
        <>
        <div className="container">
        { searched && movies === undefined ? 
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        :
            <div>
            {movies?.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
            </div>
        }
        </div>
        
        </>
    )
}

export default Home



