import { Container } from "../../shared/components/Container";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PrimeSwiper from "../../shared/components/PrimeSwiper/PrimeSwiper";
import Swipers from "../../shared/components/Swiper/Swipers";
import getTrendMovies from "../../api/getTrendMovies";
import getTopRated from "../../api/getTopRatedMovies";
export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

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

    fetchTrendMovies();
    fetchTopRatedMovies();
  }, []);

  return (
    <main>
      <section>
        <Container>
          <PrimeSwiper
            height={"100%"}
            width={"100%"}
            slideHeight={"600px"}
            slideWidth={"100%"}
            movies={trendMovies}
          />
          <Swipers movies={topRatedMovies} title="Top Rated" />
          <Swipers movies={topRatedMovies} title="On trends NOW" />
          <Swipers movies={topRatedMovies} title="Top Rated" />
          <Swipers movies={topRatedMovies} title="On trends NOW" />
          <Swipers movies={topRatedMovies} title="Top Rated" />
          <Swipers movies={topRatedMovies} title="On trends NOW" />
        </Container>
      </section>
    </main>
  );
};
