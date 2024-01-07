import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useMoviesPopular from "../hooks/useMoviesPopular";
import { imageOriginal } from "../services/image";
import SlideshowItem from "./SlideshowItem";
import TrendingList from "./TrendingList";
import Loading from "./Loading";

function Slideshow() {
  const { data, isLoading } = useMoviesPopular();
  if (isLoading) return <Loading />;

  return (
    <div className="relative">
      <Swiper
        scrollbar={{
          hide: false,
          horizontalClass: "scrollbar-custom",
          dragClass: "scrollbar-custom--drag",
        }}
        modules={[Autoplay, Scrollbar]}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
        }}
      >
        {data?.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <SlideshowItem
              {...movie}
              backdrop_path={imageOriginal(movie.backdrop_path)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <TrendingList className="z-50 my-4 block w-full md:!absolute md:-bottom-[21%] lg:-bottom-[18%]" />
    </div>
  );
}
export default Slideshow;
