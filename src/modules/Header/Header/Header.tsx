import { Container } from "../../../shared/components/Container";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import s from "./Header.module.scss";
import { FaUserCircle } from "react-icons/fa";

type Props = {
  openWeelModal: () => void;
};

export const Header = ({ openWeelModal }: Props) => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.mycontainer}>
          <HeaderNav openWeelModal={openWeelModal} />
          <FaUserCircle className={s.userIcon} color="#fff" />
        </div>
      </Container>
    </header>
  );
};
