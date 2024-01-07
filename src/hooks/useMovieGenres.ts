import { useQuery } from "@tanstack/react-query";
import { Genres } from "../entities";
import Service from "../services/api-client";

const apiClient = new Service<Genres>("/genre/movie/list");

const useMovieGenres = () => {
  return useQuery({
    queryKey: ["Genres"],
    queryFn: () => apiClient.get(),
  });
};
export default useMovieGenres;
