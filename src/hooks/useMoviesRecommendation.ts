import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entities";
import Service from "../services/api-client";

const useMoviesRecommendation = (id: number) => {
  const apiClient = new Service<Movie>(`/movie/${id}/recommendations`);
  return useQuery({
    queryKey: ["Movies Recommendation", id],
    queryFn: apiClient.getAll,
  });
};

export default useMoviesRecommendation;
