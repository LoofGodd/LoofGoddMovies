import React from "react";

interface Props {
  ids: number[];
  className?: string;
  data?: { id: number; name: string }[];
}

function MovieItemList({ ids, className, data }: Props) {
  return (
    <>
      {data?.map((data) => {
        if (!ids.find((id) => id === data.id)) return;

        return (
          <React.Fragment key={data.id}>
            <p className={className}>{data.name}</p>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default MovieItemList;
