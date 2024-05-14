import scss from "./SwiperList.module.scss";
import { useEffect, useState } from "react";
import PrimeSwiper from "../../shared/components/PrimeSwiper/PrimeSwiper";
import Swipers from "../../shared/components/Swiper/Swipers";
import getTrendMovies from "../../api/getTrendMovies";
import getTopRated from "../../api/getTopRatedMovies";
import getTrendTvMovies from "../../api/getTrendTvMovies";
import getUpcomingMovies from "../../api/getUpcomingMovies";

const SwiperList = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [ratedTv, setRatedTv] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const response = await getTrendMovies();
        setTrendMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTopRatedMovies = async () => {
      try {
        const response = await getTopRated();
        setTopRatedMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTrendTv = async () => {
      try {
        const response = await getTrendTvMovies();
        setRatedTv(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUpcomingMovies = async () => {
      try {
        const response = await getUpcomingMovies();
        setUpcomingMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpcomingMovies();
    fetchTrendTv();
    fetchTrendMovies();
    fetchTopRatedMovies();
  }, []);
  return (
    <div>
      <PrimeSwiper
        height={"100%"}
        width={"100%"}
        slideHeight={"600px"}
        slideWidth={"100%"}
        movies={trendMovies}
      />
      <Swipers movies={upcomingMovies} title="Upcoming Movies" />
      <Swipers movies={topRatedMovies} title="Top Rated" />
      <Swipers movies={ratedTv} title="Rated TV" />
    </div>
  );
};

export default SwiperList;
