import { Country } from "./Country";
import { Production } from "./Production";
import { Video } from "./Video";

export default interface Movie {
  id: number;
  genre_ids: number[];
  genres: { id: number; name: string }[];
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  runtime: number;
  spoken_languages: Country[];
  budget: number;
  revenue: number;
  production_companies: Production[];
  videos: { results: Video[] };
}
