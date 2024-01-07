import useMovie from "./useMovie";

interface Props {
  id: number;
}
const useMovieDetail = ({ id }: Props) =>
  useMovie({ endpoint: `/movie/${id}`, key: `Movie Detail ${id}` });
export default useMovieDetail;
