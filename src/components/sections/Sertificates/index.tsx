import "./sert.style.scss";
import Title from "../../Title";
import image1 from "../../../assets/images/Rectangle 396.png";
import useIntersectionObserver from "../../InterSectionObserver";
import { useRef } from "react";

function Sertificates({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

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
          <img src={image1} alt="" />
        </div>
        <div className="card middle">
          <img src={image1} alt="" />
        </div>
        <div className="card">
          <img src={image1} alt="" />
        </div>
      </div>
      <h1 className="pink-border">СЕРТИФИКАТЫ</h1>
    </div>
  );
}

export default Sertificates;
