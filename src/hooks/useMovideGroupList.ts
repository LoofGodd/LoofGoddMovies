import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entities";
import Service from "../services/api-client";

const useMovieGroupList = (id: number) => {
  const apiClient = new Service<Movie>(`/movie/${id}/similar`);
  return useQuery({
    queryKey: ["Movies Group list", id],
    queryFn: apiClient.getAll,
  });
};

export default useMovieGroupList;
