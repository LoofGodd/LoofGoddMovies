import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieDiscoverSidebar from "../components/MovieDiscoverSidebar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import useMoviesDiscover from "../hooks/useMoviesDiscover";

export type headingPlayingProps = {
  title: string;
  buttons: Button[];
};

type Button = {
  type: string;
  name: string;
};

const heading: headingPlayingProps = {
  title: "Movies",
  buttons: [
    {
      type: "button",
      name: "Movie",
    },
    {
      type: "button",
      name: "Tv show",
    },
  ],
};

function MoviesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data, isLoading } = useMoviesDiscover();
  const movieList = searchParams.get("movieList");
  const movieListParam =
    movieList !== null
      ? movieList
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim())
      : [1, "-"];

  useEffect(() => {
    navigate(`/movies?movieList=[${[...movieListParam]}]`);
  }, [navigate]);

  if (isLoading) return <Loading />;
  return (
    <div className="my-6 grid grid-cols-1  lg:grid-cols-[3fr_1fr]">
      <div className="h-fit w-full px-3 text-slate-200">
        <MovieList heading={heading} movies={data?.results} />
      </div>
      <div className="h-full w-full px-3">
        <MovieDiscoverSidebar />
      </div>
      <div className="mx-auto mt-10">
        <Pagination totalPage={data?.total_pages} />
      </div>
    </div>
  );
}

export default MoviesPage;
