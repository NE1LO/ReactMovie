import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import scss from "./Swipers.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SwipersProps {
  title: string;
  movies: [];
}

const Swipers: React.FC<SwipersProps> = ({ movies, title }) => {
  const [delay, setDelay] = useState(1500);
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
          delay: delay,
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
              onMouseEnter={() => setDelay(5000)}
              onMouseLeave={() => setDelay(1500)}
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
