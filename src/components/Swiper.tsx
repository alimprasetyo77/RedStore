// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/index.css";
import image1 from "/src/assets/supersale.jpg";
import image2 from "/src/assets/supersale2.jpg";
import image3 from "/src/assets/supersale3.jpg";
import image4 from "/src/assets/supersale4.jpg";
import image5 from "/src/assets/supersale5.jpg";
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
        className="mySwiper rounded-lg">
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
