import "./showcase.style.scss";
import showcase from "../../../assets/images/showcase-img.png";
import fingerprint from "../../../assets/images/fingerprint.png";
import decor from "../../../assets/images/decor.png";
import Button from "../../Button";
import { useCursorContext } from "../../Cursor";
import Title from "../../Title";
import useIntersectionObserver from "../../InterSectionObserver";
import { useRef } from "react";

function Showcase({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
 
  return (
    <div
      className={"showcase-section " + (entry?.isIntersecting ? "active" : "")}
      style={style}
      ref={ref}
    >
      <img className="show-image" src={showcase} alt="" />
      <img className="fingerprint-image" src={fingerprint} alt="" />
      <div className="showcase-content">
        <Title>
          Lorem ipsum dolor sit amet <img src={decor} alt="" />
        </Title>
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
