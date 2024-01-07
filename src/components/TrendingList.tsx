import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useTrendings from "../hooks/useTrendings";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingItem from "./TrendingItem";
import { imageOriginal } from "../services/image";
import { FaGripfire } from "react-icons/fa6";
import Loading from "./Loading";

interface Props {
  className?: string;
}

function TrendingList({ className }: Props) {
  const { data, isLoading } = useTrendings();

  if (isLoading) return <Loading screen="full" />;
  return (
    <div className={className}>
      <h1 className="mb-5 flex items-center justify-center gap-x-5 text-2xl font-semibold text-slate-300">
        <FaGripfire />
        <span>Trending</span>
        <FaGripfire />
      </h1>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={20}
        modules={[Autoplay, Pagination]}
      >
        {data?.results.map((trending) => (
          <SwiperSlide key={trending.id}>
            <TrendingItem
              {...trending}
              backdrop_path={imageOriginal(trending.backdrop_path)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingList;
