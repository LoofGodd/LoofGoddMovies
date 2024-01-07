import { useQuery } from "@tanstack/react-query";
import Service from "../services/api-client";
import { Movie } from "../entities";

interface Props {
  endpoint: string;
  key: string;
}
const useMovie = ({ endpoint, key }: Props) => {
  const apiClient = new Service<Movie>(endpoint);
  return useQuery({
    queryKey: [key],
    queryFn: apiClient.get,
  });
};
export default useMovie;
