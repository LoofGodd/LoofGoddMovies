import Ads from "../components/Ads";
import MovieListUpcoming from "../components/MovieListUpcoming";
import MoviePlayingList from "../components/MoviePlayingList";
import MoviesSidebarTopRate from "../components/MoviesSidebarTopRate";
import Slideshow from "../components/Slideshow";

function HomePage() {
  return (
    <div className="relative">
      <Slideshow />
      <div className="hidden h-44  md:block"></div>
      <div className="mb-6 grid grid-cols-1  lg:grid-cols-[3fr_1fr]">
        <div className="flex h-fit w-full flex-col gap-y-10 px-3 text-slate-200">
          <MoviePlayingList />
          <Ads />
          <MovieListUpcoming />
        </div>
        <div className="h-full w-full  px-3">
          <MoviesSidebarTopRate />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
