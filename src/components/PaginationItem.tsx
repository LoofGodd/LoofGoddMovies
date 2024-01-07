import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";

interface Props {
  page: number;
}
function PaginationItem({ page }: Props) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const movieList = searchParams.get("movieList");
  const movieListParam =
    movieList !== null
      ? movieList
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim())
      : [1, "-"];
  const pageParams = Number(movieListParam[0]);
  movieListParam[0] = page;
  return (
    <li onClick={() => navigate(`?movieList=[${[...movieListParam]}]`)}>
      <Button
        size="sm"
        intent="secondary"
        className={`${pageParams === page && "active"} hover:bg-dark/20`}
      >
        {page}
      </Button>
    </li>
  );
}

export default PaginationItem;
