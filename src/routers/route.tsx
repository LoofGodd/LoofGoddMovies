import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import PageNotFound from "../components/PageNotFound";
import ProtectedRoute from "../hooks/ProtectedRoute";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import MovieDetailPage from "../pages/MovieDetailPage";
import MoviesPage from "../pages/MoviesPage";
import SearchedMoviePage from "../pages/SearchedMoviesPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MovieDetailPage /> },
      { path: "searched", element: <SearchedMoviePage /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
]);

export default route;
