import useMoviesUpcoming from "../hooks/useMoviesUpcoming";
import MovieList from "./MovieList";

export type headingUpcomingProps = {
  title: string;
  buttons: Button[];
};

type Button = {
  type: string;
  name: string;
};

const heading: headingUpcomingProps = {
  title: "Upcoming",
  buttons: [
    {
      type: "view",
      name: "view more",
    },
  ],
};

function MovieListUpcoming() {
  const { data } = useMoviesUpcoming();
  return <MovieList heading={heading} movies={data?.results} />;
}

export default MovieListUpcoming;
