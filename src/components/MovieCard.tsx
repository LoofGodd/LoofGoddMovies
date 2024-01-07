import { FaStar } from "react-icons/fa6";
import { Movie as MovieT } from "../entities";
import Button from "./Button";
import Heading from "./Heading";
import MoviesPoster from "./MoviesPoster";
import Movie from "./Movie";

interface Props {
  movie: MovieT;
}

function MovieCard({ movie }: Props) {
  return (
    <Movie
      key={movie.id}
      className="group/movie grid h-[22rem] grid-cols-1 grid-rows-[1fr_3rem] gap-y-2"
    >
      <MoviesPoster {...movie} />
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center justify-between text-gray-600">
          <p>{movie.release_date.slice(0, 4)}</p>
          <Button
            intent="secondary"
            size="sm"
            background="outline"
            className="rounded-full border-gray-600 px-1 text-gray-400 group-hover/movie:border-primary"
          >
            Movies
          </Button>
          <p className="flex items-center gap-x-2">
            <span>
              <FaStar />
            </span>
            <span>{Math.floor(movie.vote_average)}</span>
          </p>
        </div>
        <Heading
          size="xs"
          title={movie.title}
          className="text-gray-400 group-hover/movie:text-primary"
          href={`/movies/${movie.id}`}
        />
      </div>
    </Movie>
  );
}

export default MovieCard;
