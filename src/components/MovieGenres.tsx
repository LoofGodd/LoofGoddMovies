import useMovieGenres from "../hooks/useMovieGenres";
import MovieItemList from "./MoviesItemList";

interface Props {
  ids: number[];
  className?: string;
}

function MoviesGenres({ ids }: Props) {
  const { data, isLoading } = useMovieGenres();

  if (isLoading) return <h1>Loading...</h1>;
  return <MovieItemList data={data?.genres} ids={ids} />;
}

export default MoviesGenres;
