import useMoviesDiscover from "../hooks/useMoviesDiscover";
import MoviesSidebar from "./MoviesSidebar";

function MovieDiscoverSidebar() {
  const { data } = useMoviesDiscover();
  return <MoviesSidebar heading="suggestion" movies={data?.results} />;
}

export default MovieDiscoverSidebar;
