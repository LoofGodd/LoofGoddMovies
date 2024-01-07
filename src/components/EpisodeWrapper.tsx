import { Video } from "../entities/Video";
import EpisodeItem from "./EpisodeItem";
import HeadingMovieGroup from "./HeadingMovieGroup";

interface Props {
  videos?: Video[];
}
function EpisodeWrapper({ videos }: Props) {
  return (
    <div className="grid h-full w-full grid-rows-[2rem_auto_2rem] items-center gap-y-3 rounded-md bg-dark text-white">
      <header className="mt-2 justify-self-center">
        <HeadingMovieGroup title="Movies files" />
      </header>
      <main className="flex h-full  w-full flex-col items-start justify-start gap-y-2 overflow-y-auto overflow-x-hidden  text-slate-300">
        {videos?.map((video) => (
          <EpisodeItem key={video.id} name={video.name} video={video} />
        ))}
      </main>
      <footer className="justify-self-center">Footer</footer>
    </div>
  );
}

export default EpisodeWrapper;
