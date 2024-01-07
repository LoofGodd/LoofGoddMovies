import { useSearchParams } from "react-router-dom";
import useMovies from "./useMovies";

const useSearchMovies = () => {
  const [searchParams] = useSearchParams();
  const movieList = searchParams.get("movieList");
  const movieListParam =
    movieList !== null
      ? movieList
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim())
      : [];

  return useMovies({
    endpoint: "/search/movie",
    key: `Search Movies keyword:${movieListParam}`,
    movieQuery: {
      page: Number(movieListParam[0]),
      query: movieListParam[1],
    },
  });
};
export default useSearchMovies;
