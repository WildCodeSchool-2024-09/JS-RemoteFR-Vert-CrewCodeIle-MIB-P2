import { useState } from "react";
import "./MenuBurger.css";

export default function MenuBurger() {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="burger openNav">
        <button type="button" className="btnBurger" onClick={handleclick}>
          <span className={`burgerNav ${open ? "open" : ""}`}> </span>
        </button>
      </div>
    </nav>
  );
}
