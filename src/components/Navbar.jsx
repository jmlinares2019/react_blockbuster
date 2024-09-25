import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import searchIcon from "../search.svg"

const Navbar = ({ setMovies, searchMovies }) => {

    const navigateTo = useNavigate();

    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const resetAll = () => {
        setMovies([]);
        navigateTo("/");
    }

    const newSearch = () => {
        resetAll();
        searchMovies(search);
        setSearch("");
    }

    return (
        <>
        <nav className="navbar">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand"
                    onClick={resetAll}>
                    MovieLand
                </Link>
                <form 
                    className="d-flex" 
                    role="search">
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search a movie" 
                        aria-label="Search"
                        onChange={handleInput}
                        value={search}     
                    />
                    <a // why not button? (reloads) 
                        className="btn" 
                        type="submit"
                        onClick={() => newSearch(search)}>
                        {/* <img 
                            src={searchIcon}
                            alt="search"
                        /> */}
                        Search
                    </a>
                </form>
            </div>
        </nav>
        </> 
    )
}

export default Navbar