// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/index.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Swipper = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <img src="src\assets\supersale.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\supersale2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\supersale3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\supersale4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\supersale5.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
