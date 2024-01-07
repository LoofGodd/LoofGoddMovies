import { FaStar } from "react-icons/fa6";
import { imageOriginal } from "../services/image";
import HeadingMovieGroup from "./HeadingMovieGroup";
import { Movie } from "../entities";
import { useNavigate } from "react-router-dom";

interface Props {
  heading: string;
  movies?: Movie[];
  isTellNumber?: boolean;
}
function MoviesSidebar({ heading, movies, isTellNumber = false }: Props) {
  const navigate = useNavigate();
  return (
    <div className="bg-secondary">
      <HeadingMovieGroup title={heading} />
      <div className="mt-6 flex flex-col gap-y-4">
        {movies?.map((movie, index) => {
          if (index > 8) return;
          return (
            <div
              key={movie.id}
              className="flex min-h-16 items-center gap-x-4 rounded-l-md bg-black text-slate-300"
            >
              <div
                className="relative basis-14 cursor-pointer"
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                {isTellNumber && (
                  <p className="absolute left-0 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-black px-2 ">
                    {index + 1}
                  </p>
                )}
                <img
                  src={imageOriginal(movie.poster_path)}
                  className="max-h-full rounded-l-md object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2 text-xs text-gray-400">
                  <p>{movie.release_date.slice(0, 4)}</p>
                  <p className="flex items-center gap-x-1">
                    <span>{Math.floor(movie.vote_average)}</span>
                    <span>
                      <FaStar />
                    </span>
                  </p>
                </div>
                <p
                  className="cursor-pointer"
                  onClick={() => navigate(`/movies/${movie.id}`)}
                >
                  {movie.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesSidebar;
