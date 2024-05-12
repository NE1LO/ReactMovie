import { Container } from "../../../shared/components/Container";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import s from "./Header.module.scss";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.mycontainer}>
          <HeaderNav />
          <FaUserCircle className={s.userIcon} color="#fff" />
        </div>
      </Container>
    </header>
  );
};
