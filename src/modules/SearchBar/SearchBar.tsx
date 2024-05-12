import { Container } from "../../shared/components/Container";
import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.scss";
import { MySelect } from "./MySelect/MySelect";
import { useState } from "react";
const list = [
  "commedy",
  "western",
  "popular",
  "commedy",
  "western",
  "popular",
  "commedy",
  "western",
  "popular",
];
export const SearchBar = () => {
  const [query, setQuery] = useState("");
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
          <MySelect
            list={list}
            query={query}
            setQuery={(value) => setQuery(value)}
          />
          <ul className={s.list}>
            {list.map((i, index) => (
              <p className={s.item} key={index} onClick={() => setQuery(i)}>
                {i}
              </p>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
