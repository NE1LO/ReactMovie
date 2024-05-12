import { NavLink } from "react-router-dom";
import { Logo } from "../../../shared/components/Logo/Logo";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import s from "./HeaderNav.module.scss";
import clsx from "clsx";
export const HeaderNav = () => {
  const dinamicStyle = ({ isActive }: { isActive: boolean }) =>
    clsx(s.link, isActive && s.linkActive);
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
      <ul className={s.mobailList}>
        <li>
          <NavLink className={dinamicStyle} to="/">
            <IoIosHome />
          </NavLink>
        </li>
        <li>
          <NavLink className={dinamicStyle} to="/search">
            <FaSearch />
          </NavLink>
        </li>
        <li>
          <button className={s.btn}>
            <GiPerspectiveDiceSixFacesRandom />
          </button>
        </li>
      </ul>
    </nav>
  );
};
