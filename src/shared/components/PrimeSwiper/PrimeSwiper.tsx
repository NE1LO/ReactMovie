import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import scss from "./PrimeSwiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Slide {
  id: number;
  title: string;
  backdrop_path: string;
}

interface PrimeSwiperProps {
  height: string;
  width: string;
  slideWidth: string;
  slideHeight: string;
  movies: Slide[];
}

const PrimeSwiper: React.FC<PrimeSwiperProps> = ({
  height,
  width,
  slideWidth,
  slideHeight,
  movies,
}) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      style={{ width: width, height: height }}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img
            style={{
              width: slideWidth,
              height: slideHeight,
            }}
            src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
            alt={movie.title}
          />
        </SwiperSlide>
      ))}
      <div className={scss.autoplayProgress} slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default PrimeSwiper;
