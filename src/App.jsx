// Packages & tools
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Assets
import "./App.css";

// Components
import Home from "./pages/Home";
import MovieDetails from './pages/MovieDetails';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
