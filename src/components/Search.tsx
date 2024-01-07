import { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import Input from "./Input";

interface Props {
  className?: string;
}

function Search({ className }: Props) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const movieList = searchParams.get("movieList");
  const movieListParam =
    movieList !== null
      ? movieList
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim())
      : [1, "-"];
  const handleQuery = (q: string) => {
    setQuery(q);
  };

  const handleSummit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    movieListParam[1] = query;
    navigate(`/searched?movieList=[${[...movieListParam]}]`);
  };
  return (
    <form
      onSubmit={handleSummit}
      className={twMerge(
        "flex w-full items-center justify-between  gap-x-10 rounded-full bg-dark/90 px-3 py-2 text-xs",
        className,
      )}
    >
      {/* <Button
        size="sm"
        intent="secondary"
        flex="center"
        className="rounded-full text-gray-300"
      >
        <CiFilter className="text-sm" />
        <span>Filter</span>
      </Button> */}
      <Input
        type="text"
        placeholder="Search Movies..."
        intent="primary"
        OnChange={(e) => handleQuery(e.target.value)}
      />
      <Button size="xs" background="none">
        <IoSearch className="text-lg text-primary" />
      </Button>
    </form>
  );
}

export default Search;
