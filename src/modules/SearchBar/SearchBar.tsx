import { Container } from "../../shared/components/Container";
import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.scss";
import { MySelect } from "./MySelect/MySelect";
import { useState } from "react";
const list = ["commedy", "western", "popular"];

type Props = {
  setQuery: (query: string) => void;
};

export const SearchBar = ({ setQuery }: Props) => {
  const [select, setSelect] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.query.value);
  };
  return (
    <section className={s.section}>
      <Container>
        <div className={s.container}>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.input}
              type="text"
              name="query"
              placeholder="Search"
            />
            <button className={s.btn}>
              <FaSearch className={s.icon} />
            </button>
          </form>
          <MySelect
            list={list}
            query={select}
            setQuery={(value) => setSelect(value)}
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
