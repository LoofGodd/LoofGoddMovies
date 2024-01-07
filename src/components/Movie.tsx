import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

function Movie({ className, children }: Props) {
  return <div className={className}>{children}</div>;
}

export default Movie;
