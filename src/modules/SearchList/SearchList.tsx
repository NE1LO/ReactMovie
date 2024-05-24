import { List } from "../../pages/MovieSearch/MovieSearch.tsx";
import { Container } from "../../shared/components/Container/Container.tsx";
import s from "./SearchList.module.scss";
import defaultImg from "./img/defaultImage.jpeg";

type Props = {
  list: List[];
  query: string;
};

export const SearchList = ({ list, query }: Props) => {
  return (
    <section className={s.section}>
      <Container>
        <div>
          <h2 className={s.title}>Search result: {query}</h2>
          <ul className={s.list}>
            {list.map((item) => (
              <li className={s.item} key={item.id}>
                <img
                  className={s.img}
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                      : defaultImg
                  }
                  alt={`Poster ${item.title}`}
                  loading="lazy"
                />
                <p className={s.itemTitle}>{item.title}</p>
                <div className={s.moreInfo}>{item.overview}</div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
