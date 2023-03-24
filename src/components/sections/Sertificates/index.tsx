import "./sert.style.scss";
import Title from "../../Title";
import image1 from "../../../assets/images/Rectangle 396.png";
import useIntersectionObserver from "../../InterSectionObserver";
import { useRef } from "react";
import { useCursorContext } from "../../Cursor";
import Blur from "../../Blur";
import Finger from "../../Finger";

function Sertificates({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const { functions } = useCursorContext();
  return (
    <div
      className={
        "sertificate-section " + (entry?.isIntersecting ? "active" : "")
      }
      style={style}
      ref={ref}
    >
      <Title>СЕРТИФИКАТЫ</Title>
      <div className="cards">
        <div className="card">
          <img src={image1} alt="" {...functions} />
        </div>
        <div className="card middle">
          <img src={image1} alt="" {...functions} />
        </div>
        <div className="card">
          <img src={image1} alt="" {...functions} />
        </div>
      </div>
      <h1 className="pink-border">СЕРТИФИКАТЫ</h1>
      <Blur className="pink-blur top-right"></Blur>
    </div>
  );
}

export default Sertificates;
