import { useState } from "react";
import s from "./MySelect.module.scss";
type Props = {
  list: [string];
};
export const MySelect = ({ list }: Props) => {
  const { isOpen, setOpen } = useState(false);
  return (
    <div className={s.mySelect} onClick={() => setOpen(!isOpen)}>
      <p className={s.text}>{"Choce categorie"}</p>
      {isOpen && (
        <div className={s.optionWrapper}>
          {/* {list.map((i, index) => (
          <p className={s.select} key={index}>
            {i}
          </p>
        ))} */}
          <p className={s.option}>Fantastic</p>
          <p className={s.option}>Popular</p>
          <p className={s.option}>Fantasy</p>
          <p className={s.option}>Western</p>
        </div>
      )}
    </div>
  );
};
