import "./showcase.style.scss";
import showcase from "../../../assets/images/showcase-img.png";
import fingerprint from "../../../assets/images/fingerprint.png";
import decor from "../../../assets/images/decor.png";
import Button from "../../Button";
import { useCursorContext } from "../../Cursor";

function Showcase() {
  const { functions } = useCursorContext();
  return (
    <div className="showcase-section">
      <img className="show-image" src={showcase} alt="" />
      <img className="fingerprint-image" src={fingerprint} alt="" />
      <div className="showcase-content">
        <h1 {...functions}>
          Lorem ipsum dolor sit amet <img src={decor} alt="" />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tincidunt aliquet dictum
          sodales bibendum etiam viverra mollis amet. Urna sed molestie auctor
          nisi.
        </p>
        <div className="buttons">
          <Button>Lorem ipsum dolor</Button>
          <Button type="shaffof">Lorem ipsum dolor</Button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
