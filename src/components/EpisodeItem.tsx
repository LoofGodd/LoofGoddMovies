import { Link, useSearchParams } from "react-router-dom";
import { Video } from "../entities/Video";

interface Props {
  name: string;
  video: Video;
}
function EpisodeItem({ name, video }: Props) {
  const [searchParams] = useSearchParams();
  return (
    <Link
      to={{ search: `?vidId=${video?.key}` }}
      className={`w-full px-4 py-2 text-xs hover:bg-slate-800 ${
        searchParams.get("vidId") === video.key && "active"
      }`}
    >
      {name}
    </Link>
  );
}

export default EpisodeItem;
