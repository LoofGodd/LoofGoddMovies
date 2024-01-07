import useMovieList from "./useMovies";

const useMoviesPopular = () =>
  useMovieList({
    endpoint: "movie/popular",
    key: "movies Popular",
    movieQuery: { page: 1 },
  });

export default useMoviesPopular;
