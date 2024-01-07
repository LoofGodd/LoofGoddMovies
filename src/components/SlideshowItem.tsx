import { Movie } from "../entities";
import Button from "./Button";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import MoviesGenres from "./MovieGenres";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const imageStyle = (backdrop_path: string) => {
  return {
    backgroundImage: `linear-gradient(120deg,#181818 0,#181818 0,rgba(24,24,24,0) 100%), url(${backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
};

function SlideshowItem({
  genre_ids,
  title,
  backdrop_path,
  release_date,
  overview,
  vote_average,
  id,
}: Movie) {
  return (
    <div
      className="relative h-[420px] bg-gradient-to-b  from-black to-white shadow-2xl shadow-dark md:h-[700px] lg:h-[900px]"
      style={imageStyle(backdrop_path)}
    >
      <div className="absolute bottom-6 left-1/2  flex w-[95%] -translate-x-1/2  flex-col items-center justify-center  gap-y-4   text-white  sm:text-center md:bottom-52 md:items-start md:justify-start">
        <Heading
          size="lg"
          className="text-center"
          title={title}
          href={`/movies/${id}`}
        />
        <div className="flex items-center justify-center gap-x-4">
          <Button size="xs">HD</Button>
          <small>{release_date.slice(0, 4)}</small>
          <div className="flex justify-center gap-x-1">
            <FaStar />
            <small>{Math.floor(vote_average)}</small>
          </div>
          <MoviesGenres ids={genre_ids} />
        </div>
        <p className="my-2 hidden w-[70%] text-start text-gray-400 lg:block">
          {overview}
        </p>
        <div className="mt-4 flex w-full justify-between gap-x-2 md:justify-start [&>*]:rounded-full">
          <Button
            flex="center"
            className="basis-1/2 hover:bg-opacity-90 md:basis-[10rem]"
          >
            <FaPlayCircle />
            <Link to={`/movies/${id}`}>Watch</Link>
          </Button>
          <Button
            flex="center"
            background="none"
            className="basis-1/2 text-gray-200 hover:text-primary md:basis-[10rem]"
          >
            <CiBookmarkPlus />
            <span>Bookmark</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SlideshowItem;
