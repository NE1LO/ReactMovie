import s from "./WeelFortune.module.scss";
import imgUrl from "../img/weel.jpg";
import { useState } from "react";
import clsx from "clsx";

type Props = {
  closeModal: () => void;
};

export const WeelFortune = ({ closeModal }: Props) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className={s.backdrop} onClick={closeModal}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.imgContainer}>
          <img className={s.imgBig} src={imgUrl} alt="" />
        </div>
        <div className={clsx(s.imgSmallContainer, isActive && s.active)}>
          <img className={s.imgSmall} src={imgUrl} alt="" />
        </div>
        <button className={s.btn} onClick={() => setActive(true)}>
          Play
        </button>
      </div>
    </div>
  );
};
