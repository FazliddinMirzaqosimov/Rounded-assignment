import "./footer.style.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import icon from "../../../assets/images/Vector.png";
import Button from "../../Button";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useCursorContext } from "../../Cursor";
import { useRef } from "react";
import useIntersectionObserver from "../../InterSectionObserver";

function Footer() {
  const { functions } = useCursorContext();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <footer className={entry?.isIntersecting ? "active" : ""} ref={ref}>
      <div className="list-items">
        <div className="list-item">
          <Link to="/">
            <img src={logo} alt="" {...functions} />
          </Link>
          <h1>Education</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
            vestibulum euismod nullam the elementum. Urna, posuere nisi sit
            gravid.
          </p>
        </div>
        <div className="list-item">
          <Link to={"/"}>
            <img src={icon} alt="" /> About Us{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> Graduation
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> Scholarship{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> International{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> Events{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> Events{" "}
          </Link>
        </div>{" "}
        <div className="list-item">
          <Link to={"/"}>
            <img src={icon} alt="" /> Scholarship{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> International{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> Events{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> Events{" "}
          </Link>
          <Link to={"/"}>
            <img src={icon} alt="" /> Events{" "}
          </Link>
        </div>
        <div className="list-item">
          <p>Звонок по Узбекистану бесплатный</p>
          <Link to={"tel:+99899999999"}>
            <h2>+998 (99) 99-99-99</h2>
          </Link>
          <Link to={"tel:+99899999999"}>
            <Button size="small"> Перезвоните нам</Button>
          </Link>
          <div className="icons">
            <Link to={"/"}>
              <FaFacebookF />
            </Link>
            <Link to={"/"}>
              <BsTwitter />
            </Link>
            <Link to={"/"}>
              <AiFillInstagram />
            </Link>
            <Link to={"/"}>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
