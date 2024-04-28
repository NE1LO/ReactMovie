import { Container } from "../../../shared/components/Container";
import { Logo } from "../../../shared/components/Logo/Logo";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.container}>
          <Logo />
          <button className={s.btn}>Team</button>
          <a href="" className={s.btn}>
            API
          </a>
          <button className={s.btn}>Steck</button>
        </div>
      </Container>
    </footer>
  );
};
