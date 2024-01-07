import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import MovieDiscoverSidebar from "../components/MovieDiscoverSidebar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import useSearchMovies from "../hooks/useSearchMovies";

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

function SearchedMoviePage() {
  const { data, isLoading } = useSearchMovies();
  const navigate = useNavigate();
  if (isLoading) return <Loading />;
  if (data?.results.length === 0) {
    navigate("/movieNotFound");
    return null;
  }
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

export default SearchedMoviePage;
