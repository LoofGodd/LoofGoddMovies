import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieDetail from "../components/MovieDetail";
import useMovieDetail from "../hooks/useMovieDetail";
import { imageOriginal } from "../services/image";

function MovieDetailPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieDetail({ id: Number(id) });
  if (isError)
    return <div className="h-40 w-full bg-yellow-200">Error Bro</div>;
  if (isLoading || !data) return <Loading />;
  return (
    <div>
      <MovieDetail
        {...data}
        backdrop_path={imageOriginal(data.backdrop_path)}
        poster_path={imageOriginal(data.poster_path)}
      />
    </div>
  );
}

export default MovieDetailPage;
