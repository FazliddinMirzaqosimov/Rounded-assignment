import "./worker.style.scss";
import profile from "../../../assets/images/Rectangle 393.png";
import Title from "../../Title";
import useIntersectionObserver from "../../InterSectionObserver";
import { useRef } from "react";

function Workers({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <div
      className={"workers-section " + (entry?.isIntersecting ? "active" : "")}
      style={style}
      ref={ref}
    >
      <Title>НАСТАВНИКИ</Title>
      <div className="cards">
        <div className="card">
          <img src={profile} alt="" />
          <h2>Алина</h2>
        </div>
        <div className="middle">
          <div className="card">
            <img src={profile} alt="" />
            <h2 className="red">Алина</h2>
          </div>
          <div className="card">
            <img src={profile} alt="" />
            <h2>Алина</h2>
          </div>
        </div>
        <div className="card">
          <img src={profile} alt="" />
          <h2 className="red">Алина</h2>
        </div>
      </div>
    </div>
  );
}

export default Workers;
