import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"

const MainLayout = ({ setMovies, searchMovies }) => {
  return (
    <>
        <Navbar 
            setMovies={setMovies} 
            searchMovies={searchMovies}
        />
        <main className="main-wrapper">
          <Outlet />
        </main>
    </>
  )
}

export default MainLayout