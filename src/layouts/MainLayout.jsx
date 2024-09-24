import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"

const MainLayout = ({ setMovies, searchMovies }) => {
  return (
    <>
        <Navbar 
            // search={search} 
            setMovies={setMovies}
            // handleInput={handleInput} 
            searchMovies={searchMovies}
        />
        <Outlet />
    </>
  )
}

export default MainLayout