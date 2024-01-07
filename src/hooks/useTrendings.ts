import useMovieList from "./useMovies";

const useTrendings = () =>
  useMovieList({
    endpoint: "trending/all/week",
    key: "Movies Trending",
    movieQuery: { page: 1 },
  });
export default useTrendings;
