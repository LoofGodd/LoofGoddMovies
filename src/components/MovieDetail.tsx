import { FaPlayCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { Movie } from "../entities";
import useMovieGroupList from "../hooks/useMovideGroupList";
import useMoviesTopRate from "../hooks/useMovieTopRate";
import useMoviesDiscover from "../hooks/useMoviesDiscover";
import useMoviesRecommendation from "../hooks/useMoviesRecommendation";
import videoService from "../services/video";
import Ads from "./Ads";
import Button from "./Button";
import EpisodeWrapper from "./EpisodeWrapper";
import Heading from "./Heading";
import MovieList from "./MovieList";
import MoviesSidebar from "./MoviesSidebar";

function MovieDetail({
  revenue,
  budget,
  backdrop_path,
  poster_path,
  genres,
  title,
  runtime,
  vote_average,
  release_date,
  overview,
  spoken_languages,
  production_companies,
  videos,
  id,
}: Movie) {
  const location = useLocation();
  const vidId = new URLSearchParams(location.search).get("vidId");
  const { data: movieRec } = useMoviesRecommendation(id);
  const { data: movieTopRate } = useMoviesTopRate();
  const { data: movieGroup } = useMovieGroupList(id);
  const { data: movieDiscover } = useMoviesDiscover();

  return (
    <div>
      <div
        className={`relative h-[600px] before:absolute before:-bottom-4 before:h-1/5 before:w-full before:bg-dark/60 before:blur-xl after:absolute after:z-10 after:h-full after:w-full after:bg-black after:bg-opacity-30`}
        style={{
          background: `url('${backdrop_path}') center/cover no-repeat`,
        }}
      >
        <Link
          to={{
            pathname: `/movies/${id}`,
            search: `vidId=${videos?.results[0].key}`,
          }}
          className="absolute left-1/2 top-1/2 z-20 w-fit -translate-x-1/2 -translate-y-1/2 cursor-pointer text-7xl text-primary/80 hover:text-primary"
        >
          {vidId ? (
            <iframe
              width="560"
              height="315"
              src={videoService(vidId)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            <FaPlayCircle />
          )}
        </Link>
      </div>

      <div className="mt-8 flex flex-col px-10">
        <div className="grid grid-cols-1  gap-y-5 lg:grid-cols-[3fr_1fr] lg:gap-x-8">
          <div className="relative row-start-2 flex flex-col items-start gap-x-6 pb-9 lg:row-start-1 lg:flex-row lg:pb-0">
            <div className="absolute -z-10 h-full basis-[30rem] overflow-hidden rounded-md before:absolute before:-bottom-32 before:-left-20 before:h-1/2 before:w-[150%] before:bg-dark before:blur-3xl  after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-dark/70 lg:relative lg:before:bg-transparent lg:after:bg-dark/30">
              <img
                src={poster_path}
                alt={title}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="block h-44 w-full lg:hidden"></div>
            <div className="flex w-full  flex-col  gap-y-5 px-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-3">
                  <Heading title={title} size="lg" href={`/movies/${id}`} />
                  <div className="items-centers flex gap-x-6">
                    <Button size="sm" className="rounded-lg">
                      HD
                    </Button>
                    <p className="flex items-center gap-x-1">
                      {Math.floor(vote_average)} <FaStar />
                    </p>
                    <p>{release_date?.slice(0, 4)}</p>
                    <p>{runtime} min</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-9 -translate-x-1/2 lg:static">
                  Rating
                </div>
              </div>
              <div>{overview}</div>
              <div className="flex gap-x-8">
                <div className="">
                  <ul>
                    <li className="text-gray-400">Type:</li>
                    <li className="text-gray-500">Country:</li>
                    <li className="text-gray-500">Genre:</li>
                    <li className="text-gray-500">Release:</li>
                    <li className="text-gray-500">Budge:</li>
                    <li className="text-gray-500">Revenue:</li>
                    <li className="text-gray-500">Production:</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="#">Movie</a>
                    </li>
                    <li>
                      <a className="flex gap-x-2">
                        {spoken_languages.map((country) => (
                          <p key={country.name}>{country.name}</p>
                        ))}
                      </a>
                    </li>
                    <li className="flex gap-x-2">
                      {genres.map((genre) => (
                        <p key={genre.id}>{genre.name}</p>
                      ))}
                    </li>
                    <li>{release_date}</li>
                    <li>{budget}$</li>
                    <li>{revenue}$</li>
                    <li className="flex flex-wrap gap-x-2">
                      {production_companies.map((production) => (
                        <p key={production.id}>{production.name},</p>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[25rem]">
            <EpisodeWrapper videos={videos.results} />
          </div>
        </div>
        <div className="mb-6  mt-16 grid grid-cols-1 gap-x-4 lg:grid-cols-[3fr_1fr]">
          <div className="h-fit w-full text-slate-200">
            <Ads />
            <div className="my-12">
              <MovieList
                movies={
                  movieGroup && movieGroup?.results.length < 19
                    ? movieDiscover?.results
                    : movieGroup?.results
                }
                heading={{
                  title: "Relating",
                  buttons: [],
                }}
              />
            </div>
          </div>
          <div className="h-full w-full px-3">
            <MoviesSidebar
              heading="Recommendation"
              movies={
                movieRec && movieRec?.results.length > 9
                  ? movieRec?.results
                  : movieTopRate?.results
              }
              isTellNumber={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
