import useMoviesTopRate from "../hooks/useMovieTopRate";
import Loading from "./Loading";
import MoviesSidebar from "./MoviesSidebar";

function MoviesSidebarTopRate() {
  const { data, isLoading } = useMoviesTopRate();
  if (isLoading) return <Loading screen="full" />;
  return (
    <MoviesSidebar
      heading="Top Rate"
      movies={data?.results}
      isTellNumber={true}
    />
  );
}

export default MoviesSidebarTopRate;
