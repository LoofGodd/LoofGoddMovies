import useMovieList from "./useMovies";

const useMoviesUpcoming = () =>
  useMovieList({
    endpoint: "movie/upcoming",
    key: "Movies Upcoming",
    movieQuery: { page: 1 },
  });

export default useMoviesUpcoming;
