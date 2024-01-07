import React from "react";
import { Movie } from "../entities";
import Button from "./Button";
import HeadingMovieGroup from "./HeadingMovieGroup";
import MovieCard from "./MovieCard";
import { headingPlayingProps } from "./MoviePlayingList";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
  movies?: Movie[];
  heading: headingPlayingProps;
}
function MovieList({ movies, heading }: Props) {
  return (
    <div className="h-full w-full">
      <HeadingMovieGroup
        title={heading.title}
        className={`${heading.title !== "Playing" && "justify-between"} mb-6`}
      >
        {heading.buttons.map((button) => (
          <React.Fragment key={button.name}>
            {button.type !== "view" ? (
              <Button
                size="md"
                background="outline"
                className="border-slate-400 text-slate-400 hover:border-primary"
                key={button.name}
              >
                {button.name}
              </Button>
            ) : (
              <Button
                size="sm"
                background="outline"
                flex="center"
                className="border-slate-400 text-slate-400 hover:border-primary"
                key={button.name}
              >
                {button.name}
                <GoArrowUpRight />
              </Button>
            )}
          </React.Fragment>
        ))}
      </HeadingMovieGroup>

      <div className="grid grid-cols-2 grid-rows-1 gap-x-2 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies?.map((movie, index) => {
          if (index > 17) return;
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
