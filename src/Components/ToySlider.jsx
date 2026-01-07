import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ToysCard from "./ToysCard/ToysCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ToySlider = ({ toys = [] }) => {
  if (!Array.isArray(toys) || toys.length === 0) {
    return <p className="text-center">No toys found</p>;
  }

  return (
    <div className="my-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-6">
        Our Demanding Toys
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        sliderPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: {slidesPerView: 2},
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {toys.map((toy) => (
          <SwiperSlide key={toy.toyId}>
            <ToysCard toy={toy} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ToySlider;
