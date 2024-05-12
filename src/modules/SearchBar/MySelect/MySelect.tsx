import { useState } from "react";
import s from "./MySelect.module.scss";
import clsx from "clsx";
type Props = {
  list: string[];
  query: string;
  setQuery: (i: string) => void;
};
export const MySelect = ({ list, query, setQuery }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={s.container}>
      <div
        className={clsx(s.mySelect, isOpen && s.active)}
        onClick={() => setOpen(!isOpen)}
      >
        <p className={s.text}>{query || "Choce categorie"}</p>
        {isOpen && (
          <div className={s.optionWrapper}>
            {list.map((i, index) => (
              <p className={s.option} key={index} onClick={() => setQuery(i)}>
                {i}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
