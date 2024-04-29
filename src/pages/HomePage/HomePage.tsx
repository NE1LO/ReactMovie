import { Container } from "../../shared/components/Container";
import Swipers from "../../shared/components/Swiper/Swiper";

export const HomePage = () => {
  return (
    <main>
      <section>
        <Container>
          <Swipers
            height={"600px"}
            width={"100%"}
            slideHeight={"600px"}
            slideWidth={"100%"}
            slides={["grey", "blue", "purple", "grey", "black"]}
          />
        </Container>
      </section>
    </main>
  );
};
