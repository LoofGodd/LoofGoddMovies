import { IoIosPlay } from "react-icons/io";
import Heading from "./Heading";
import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
  size?: string;
  className?: string;
}
function HeadingMovieGroup({
  title,
  children,
  className = "justify-start",
}: Props) {
  return (
    <div className="mt-11 lg:mt-0">
      <h1 className={`flex items-center gap-x-3 ${className}`}>
        <span className="flex items-center gap-x-1">
          <div className="rounded-sm bg-primary py-1">
            <IoIosPlay className="text-xl text-dark" />
          </div>
          <Heading title={title} size="lg" href="" />
        </span>
        <div className="flex items-center gap-x-2 [&>*]:rounded-lg">
          {children}
        </div>
      </h1>
    </div>
  );
}

export default HeadingMovieGroup;
