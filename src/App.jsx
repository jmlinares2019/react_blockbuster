// Packages & tools
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Assets
import "./App.css";

// Components
import MainLayout from './layouts/MainLayout';
import Home from "./pages/Home";
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';

function App() {

      const API_URL = "https://www.omdbapi.com/?apikey=7f41dab3";

      const navigateTo = useNavigate();

      const [movies, setMovies] = useState([]);
      const [searched, setSearched] = useState(false);
      const [loading, setLoading] = useState(false);
      const [movieDetails, setMovieDetails] = useState({});
      const [randomMovie, setRandomMovie] = useState({});
      
      // Fecthing a random movie of the day (home)
      const fetchRandomMovie = async () => {
        setLoading(true);
        const searchTerms = ["head", "body", "tree", "love", "world", "friend", "life", "great", "cold", "kill", "city", "game", "fear", "hot"];
        const termIndex = Math.floor((Math.random()) * (searchTerms.length)); 
        const randomSearchTerm = searchTerms[termIndex]; 
        const pickIndex = Math.floor((Math.random()) * 11);
        try{
          const res = await fetch(`${API_URL}&s=${randomSearchTerm}&type=movie&plot=full`);
          const data = await res.json();
          setRandomMovie(data.Search[pickIndex]);
        } catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
      }
      
      // Fetching movies by search
      const searchMovies = async (search) => {
          navigateTo("/results");
          setLoading(true);
          setSearched(true);
          sessionStorage.setItem("searchTerm", search);
          try {
              const res = await fetch(`${API_URL}&s=${search}`);
              const movies = await res.json();
              setMovies(movies.Search);
          } catch(err) {
              console.log(err);
          } finally {
              setLoading(false);
          }
      }

      // Fetching movie data (when clicking on a search result)
      async function fetchMovieDetails(id){
          setLoading(true);
          try{
              const res = await fetch(`${API_URL}&i=${id}&plot=full`);
              const data = await res.json();
              setMovieDetails(data);
          } catch(error) {
              console.log(error);
          } finally {
              setLoading(false);
          }
      }

      return(
        <Routes>
          <Route 
              path="/" 
              element={<MainLayout 
                          setMovies={setMovies}
                          searchMovies={searchMovies}
                      />
              }
            >
              <Route 
                index 
                element={<Home 
                            fetchRandomMovie={fetchRandomMovie}
                            randomMovie={randomMovie}
                            loading={loading}
                        />
                }
              />
              <Route 
                path="/results"
                element={<SearchResults 
                            searchBackMovies={searchMovies}
                            searched={searched}
                            movies={movies} 
                            loading={loading}
                        />}
              />
              <Route 
                path="/movie/:id"
                element={<MovieDetails 
                            fetchMovieDetails={fetchMovieDetails}
                            movieDetails={movieDetails}
                            loading={loading} 
                        />}   
              />
            </Route>
        </Routes>
      )
}

export default App
