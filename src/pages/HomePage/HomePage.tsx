import { Container } from "../../shared/components/Container";
import Swipers from "../../shared/components/Swiper/Swiper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectTrendMovies } from "../../redux/Movies/selectors";
import getTrendMovies from "../../redux/Movies/api/getTrendMovies";
export const HomePage = () => {
  const trendMovies = useSelector(selectTrendMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendMovies());
  }, [dispatch]);

  console.log(trendMovies);

  return (
    <main>
      <section>
        <Container>
          <Swipers
            height={"100%"}
            width={"100%"}
            slideHeight={"600px"}
            slideWidth={"100%"}
            slides={trendMovies.items}
          />
        </Container>
      </section>
    </main>
  );
};
