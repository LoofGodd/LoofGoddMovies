import useMovieList from "./useMovies";

const useMoviesTopRate = () =>
  useMovieList({
    endpoint: "movie/top_rated",
    key: "Movies Top Rate",
    movieQuery: { page: 1 },
  });

export default useMoviesTopRate;
