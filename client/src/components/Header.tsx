import { NavLink } from "react-router-dom";
import logo from "../assets/images/logoMIBNews.webp";

export default function Header() {
  return (
    <header>
      <NavLink to="/" reloadDocument>
        <img src={logo} alt="logo MIB News" className="logo" />
      </NavLink>

      <div className="titlebtn">
        <h1>M.I.B News</h1>
        <button type="button" className="favoris">
          ❤️Favoris
        </button>
      </div>
    </header>
  );
}
