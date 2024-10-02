import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ searchMovies }) => {

    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const handleEnter = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            newSearch(search);
        }
    }
    
    const newSearch = () => {
        searchMovies(search);
        setSearch("");
    }

    return (
        <>
        <nav className="navbar">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand"
                    to={"/"}>
                    KinoLand
                </Link>
                <div className="d-flex searchbar">
                    <input 
                        className="search-input form-control me-2" 
                        type="search" 
                        placeholder="Search a movie" 
                        aria-label="Search"
                        onChange={handleInput}
                        onKeyUp={handleEnter}
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
                </div>
            </div>
        </nav>
        </> 
    )
}

export default Navbar