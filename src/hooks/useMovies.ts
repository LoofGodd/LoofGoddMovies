import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entities";
import { MovieQuery } from "../entities/MovieQuery";
import Service from "../services/api-client";

interface Props {
  endpoint: string;
  key: string;
  movieQuery: MovieQuery;
}
const useMovieList = ({ endpoint, key, movieQuery }: Props) => {
  const apiClient = new Service<Movie>(endpoint);
  return useQuery({
    queryKey: [key],
    queryFn: () =>
      apiClient.getAll({
        params: movieQuery,
      }),
  });
};
export default useMovieList;
