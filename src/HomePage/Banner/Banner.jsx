// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

export default function Banner() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}
