import { Container } from "../../shared/components/SharedLayout/Container";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <p className={s.test}>Footer</p>
      </Container>
    </footer>
  );
};
