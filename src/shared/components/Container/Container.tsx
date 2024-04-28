import clsx from "clsx";
import s from "./Container.module.scss";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx(s.container, className && className)}>{children}</div>
  );
};
