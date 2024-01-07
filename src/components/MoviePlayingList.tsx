import useMoviesPlaying from "../hooks/useMvoiesPlaying";
import Loading from "./Loading";
import MovieList from "./MovieList";

export type headingPlayingProps = {
  title: string;
  buttons: Button[];
};

type Button = {
  type: string;
  name: string;
};

const heading: headingPlayingProps = {
  title: "Playing",
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
function MoviePlayingList() {
  const { data, isLoading } = useMoviesPlaying();
  if (isLoading) return <Loading screen="full" />;
  return <MovieList heading={heading} movies={data?.results} />;
}

export default MoviePlayingList;
