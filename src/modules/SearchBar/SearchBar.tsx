import { Container } from "../../shared/components/Container";
import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.scss";
import { MySelect } from "./MySelect/MySelect";
export const SearchBar = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.container}>
          <form className={s.form}>
            <input className={s.input} type="text" placeholder="Search" />
            <button className={s.btn}>
              <FaSearch className={s.icon} />
            </button>
          </form>
          <MySelect list={["a"]} />
        </div>
      </Container>
    </section>
  );
};
