import { Container } from "../../shared/components/SharedLayout/Container";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <p className={s.text}>Header</p>
      </Container>
    </header>
  );
};
