import { NavLink } from "react-router-dom";
import { Logo } from "../../../shared/components/Logo/Logo";
import s from "./HeaderNav.module.scss";
import clsx from "clsx";
export const HeaderNav = () => {
  const dinamicStyle = ({ isActive }) => clsx(s.link, isActive && s.linkActive);
  return (
    <nav className={s.nav}>
      <Logo />
      <ul className={s.list}>
        <li>
          <NavLink className={dinamicStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={dinamicStyle} to="/search">
            Search movie
          </NavLink>
        </li>
        <li>
          <button className={s.btn}>Wheel of fortune</button>
        </li>
      </ul>
    </nav>
  );
};
