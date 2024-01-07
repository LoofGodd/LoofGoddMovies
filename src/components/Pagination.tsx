import { useSearchParams } from "react-router-dom";
import PaginationItem from "./PaginationItem";

const generateArray = (start: number, end: number): number[] => {
  const array = [];
  for (let index = start; index <= end; index++) {
    array.push(index);
  }
  return array;
};

const generatePages = (
  start: number,
  end: number,
  page: number,
  exceptPages: number[],
  totalPages: number,
  pageMid: number,
) => {
  if (page <= exceptPages[0]) return generateArray(1, pageMid * 2 + 1);
  if (page >= exceptPages[1])
    return generateArray(totalPages - (pageMid + 1) * 2, totalPages - 2);
  return generateArray(start, end);
};

interface Props {
  totalPage?: number;
}

function Pagination({ totalPage = 0 }: Props) {
  const [searchParams] = useSearchParams();
  const movieList = searchParams.get("movieList");
  const movieListParam =
    movieList !== null
      ? movieList
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim())
      : [];
  const page = Number(movieListParam[0]);
  const pagesAfterMid = 4;
  const exceptPage = [pagesAfterMid + 1, totalPage - pagesAfterMid - 1];

  const startPage = page - pagesAfterMid;
  const endPage = page + pagesAfterMid;

  const pages = generatePages(
    startPage,
    endPage,
    page,
    exceptPage,
    totalPage,
    pagesAfterMid,
  );

  return (
    <ul className="flex gap-x-1">
      {pages.map((page, index) => {
        if (index === 0)
          return (
            <div className="flex" key={index}>
              <PaginationItem page={index + 1} />
              <span className="text-primary">..</span>
            </div>
          );
        if (index === pagesAfterMid * 2)
          return (
            <div className="flex" key={totalPage}>
              <span className="text-primary">..</span>
              <PaginationItem page={totalPage} />
            </div>
          );

        return <PaginationItem key={page} page={page} />;
      })}
    </ul>
  );
}

export default Pagination;
