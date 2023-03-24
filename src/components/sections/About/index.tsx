import "./about.style.scss";
import image from "../../../assets/images/Design.png";
import Title from "../../Title";
import useIntersectionObserver from "../../InterSectionObserver";
import { useRef } from "react";
import Blur from "../../Blur";

function About({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <div
      className={"about-section " + (entry?.isIntersecting ? " active" : "")}
      style={style}
      ref={ref}
    >
      <div className="text">
        <Title>О НАС</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
          pellentesque volutpat et vitae. Consequat felis ut in pellentesque
          feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
          lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi.
          Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst
          ullamcorper nulla.
        </p>
      </div>
      <div className="image">
        <img src={image} alt="" />
        <h1 className="pink-border">О НАС</h1>
      </div>
      <Blur className="pink-blur top-right  " />
    </div>
  );
}

export default About;
