import useMovieList from "./useMovies";

const useMoviesPlaying = () =>
  useMovieList({
    endpoint: "/movie/now_playing",
    key: "Movies Playing",
    movieQuery: { page: 1 },
  });

export default useMoviesPlaying;
