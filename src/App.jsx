// Packages & tools
import { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Assets
import "./App.css";

// Components
import MainLayout from './layouts/MainLayout';
import Home from "./pages/Home";
import MovieDetails from './pages/MovieDetails';

function App() {

    const API_URL = "http://www.omdbapi.com/?apikey=df6ac670";

    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState(false);

    // Fetching movies by search
    const searchMovies = async (search) => {
        console.log(search);
        setSearched(true);
        try {
            const res = await fetch(`${API_URL}&s=${search}`);
            const moviesData = await res.json();
            console.log(moviesData.Search);
            setMovies(moviesData.Search);
        } catch(err) {
            console.log(err);
        }
    }

    const router = createBrowserRouter(
      createRoutesFromElements(
        <> 
          <Route 
            path="/" 
            element={<MainLayout 
                        setMovies={setMovies}
                        searchMovies={searchMovies}
                    />
          }>
            <Route 
              index 
              element={<Home 
                        searched={searched}
                        movies={movies} 
                      />}
            />
            <Route 
              path="/movie/:id" 
              element={<MovieDetails />}   
            />
          </Route>
        </>
      )
    )

    return (
      <RouterProvider router={router} />
    )
}

export default App
