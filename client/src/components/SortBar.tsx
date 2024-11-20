import "./SortBar.css";
import { useState } from "react";
export default function SortBar({
  categories,
  setCurrentCategory,
}: {
  categories: string[];

  setCurrentCategory: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const handleClick = (value: string) => setCurrentCategory(value);
  const handleclickMenu = () => {
    setOpen(!open);
  };
  return (
    <section className="sortBar">
      <div className="burger openNav">
        <button type="button" className="btnBurger" onClick={handleclickMenu}>
          <span className={`burgerNav ${open ? "open" : ""}`}> </span>
        </button>
      </div>
      <div className={`sortButtons ${open ? "openNav" : ""}`}>
        <button
          type="button"
          onClick={() => handleClick("")}
          className="buttons"
        >
          Tous les articles
        </button>
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => handleClick(c)}
            className="buttons"
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
