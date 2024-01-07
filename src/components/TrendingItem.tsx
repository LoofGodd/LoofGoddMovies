import { Movie as IMovie } from "../entities";
import Movie from "./Movie";
import MoviesGenres from "./MovieGenres";
import Poster from "./Poster";

function TrendingItem({ title, backdrop_path, genre_ids, id }: IMovie) {
  return (
    <Movie className="h-[14rem] overflow-hidden rounded-3xl">
      <Poster
        intent="trending"
        backgroundImagePath={backdrop_path}
        className="absolute"
        href={`/movies/${id}`}
      />
      <div className="absolute bottom-5 left-2 z-20">
        <a
          href={`/movies/${id}`}
          className="mb-4 text-lg font-extrabold uppercase tracking-widest text-slate-200"
        >
          {title}
        </a>
        <div className="flex items-center justify-start gap-x-4 text-xs">
          <MoviesGenres ids={genre_ids} className="font-bold text-primary" />
        </div>
      </div>
    </Movie>
  );
}

export default TrendingItem;
