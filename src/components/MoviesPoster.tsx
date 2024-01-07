import { FaCirclePlay, FaStar } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { Movie } from "../entities";
import { imageOriginal } from "../services/image";
import Button from "./Button";
import Heading from "./Heading";
import MoviesGenres from "./MovieGenres";
import Poster from "./Poster";
import { useNavigate } from "react-router-dom";

function MoviesPoster({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
  genre_ids,
  overview,
}: Movie) {
  const navigate = useNavigate();
  return (
    <div
      data-tooltip-id={`${id}`}
      data-tooltip-delay-show={500}
      className="group/play relative"
    >
      <Poster
        intent="poster"
        backgroundImagePath={imageOriginal(poster_path)}
        className="group-hover/play:shadow-poster"
        href={`/movies/${id}`}
      />
      <div onClick={() => navigate(`/movies/${id}`)}>
        <FaCirclePlay className="absolute-middle cursor-pointer text-5xl text-dark opacity-0 transition-opacity duration-300 group-hover/play:opacity-100" />
      </div>
      <Tooltip
        id={`${id}`}
        place="left-end"
        className="!z-50 !w-[13rem] p-4 group-hover/play:!opacity-100 sm:!w-[15rem] md:!w-[22rem]"
        variant="dark"
        delayShow={1000}
        clickable
      >
        <div className="mb-4 flex flex-col gap-y-2 border-b border-slate-500 pb-4">
          <Heading
            size="sm"
            title={title}
            className="cursor-pointer hover:text-primary"
            href={`/movies/${id}`}
          />
          <div className="flex items-center gap-x-2 text-primary">
            <Button size="sm">HD</Button>
            <p className="">{release_date.slice(0, 4)}</p>
            <p className="flex items-center gap-x-2">
              <FaStar />
              <span>{Math.floor(vote_average)}</span>
            </p>
          </div>
        </div>
        <div>
          <div className=" flex flex-wrap items-center gap-x-1">
            <span className="text-gray-400">Genres:</span>
            <div className="flex flex-wrap items-center gap-x-2 font-semibold text-slate-200">
              <MoviesGenres ids={genre_ids} />
            </div>
          </div>
          <div className="flex items-start gap-x-1 md:items-center">
            <span className="text-gray-400">Score:</span>
            <span>
              {vote_average} by {vote_count} reviews
            </span>
          </div>
        </div>
        <div>
          <p className="mt-5 text-xs text-gray-400">
            {overview.slice(0, 200).trimEnd() + "..."}
          </p>
          <Button className="mt-3 w-[10rem] rounded-full hover:bg-opacity-80">
            Watch Now
          </Button>
        </div>
      </Tooltip>
    </div>
  );
}

export default MoviesPoster;
