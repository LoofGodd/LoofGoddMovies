import { useSearchParams } from "react-router-dom";
import useMovies from "./useMovies";

const useMoviesDiscover = () => {
  const [searchParams] = useSearchParams();

  const movieList = searchParams.get("movieList");
  const movieListParam =
    movieList !== null
      ? movieList
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim())
      : [1, "-"];
  const page = Number(movieListParam[0]);
  console.log("Movies discover render", page, movieListParam, movieList);
  return useMovies({
    endpoint: "/discover/movie",
    key: `Movies Discover page:${page}`,
    movieQuery: { page: page },
  });
};
export default useMoviesDiscover;
