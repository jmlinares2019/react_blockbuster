import MovieCard from "../components/MovieCard";

import Loader from "../components/Loader";

function Home({ searched, movies, loading }){

    return(
            <div className="container">
                <div className="row">
                    <h1>Title here</h1>
                    <p>
                        Exercitation sunt qui id excepteur consequat quis eu occaecat cupidatat exercitation velit. Duis magna ea sint officia culpa magna deserunt in reprehenderit dolore ad laboris ea est. Aute dolor sint ad sint magna deserunt non incididunt sit est cupidatat mollit. Officia labore Lorem laboris aliqua id velit laboris consectetur non minim mollit dolor. Voluptate labore sint in aute qui veniam enim deserunt. Excepteur eiusmod irure occaecat ex labore nisi ea reprehenderit pariatur in in anim adipisicing.
                    </p>
                </div>
                <div className="row">
                { loading ? 
                    <Loader />
                :
                    ( searched && movies === undefined ? 
                        <div className="col empty">
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
    )
}

export default Home



