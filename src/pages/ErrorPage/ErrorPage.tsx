import { NavLink } from "react-router-dom";
import { Container } from "../../shared/components/Container";
import { IoIosArrowBack } from "react-icons/io";
import s from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <main className={s.error}>
      <Container>
        <div className={s.errorContainer}>
          <NavLink to="/" className={s.btnHome}>
            <IoIosArrowBack />
            Go to home
          </NavLink>
          <h1 className={s.errorTitle}>Not found 404</h1>
        </div>
      </Container>
    </main>
  );
};
