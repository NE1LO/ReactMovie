import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import scss from "./Swipers.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SwipersProps {
  title: string;
  movies: movies[];
}

const Swipers: React.FC<SwipersProps> = ({ movies, title }) => {
  return (
    <>
      <h2 className={scss.title}>{title}</h2>
      <Swiper
        style={{ width: "100%", height: "400px", margin: "10px 0 10px 0" }}
        spaceBetween={5}
        centeredSlides={false}
        slidesPerView={5}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              style={{
                margin: "10px 0",
                borderRadius: "2px",
                width: "230px",
                height: "350px",
              }}
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Swipers;
