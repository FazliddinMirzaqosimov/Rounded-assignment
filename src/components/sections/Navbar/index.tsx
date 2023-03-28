import "./nav.style.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useCursorContext } from "../../Cursor";
import DropDown from "../../DropDown";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { functions } = useCursorContext();
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="" {...functions} />
        </Link>
        <div className={"menu " + (open ? "active" : "")}>
          <Link to={"/"}>О НАС</Link>
          <Link to={"/"}>КУРСЫ</Link>
          <Link to={"/"}>НОВОСТИ</Link>
          <Link to={"/"}>НАСТАВНИКИ ✨</Link>
          <Link to={"/"}>
            <DropDown />
          </Link>
          <Link to={"/"}>КОНТАКТЫ</Link>
        </div>
        <div className="menu-button" onClick={() => setOpen(!open)}>
          <RxHamburgerMenu size={30} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
