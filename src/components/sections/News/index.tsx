import "./news.style.scss";
import Title from "../../Title";
import image1 from "../../../assets/images/Rectangle 398.png";
import image2 from "../../../assets/images/Rectangle 399.png";
import { useRef } from "react";
import useIntersectionObserver from "../../InterSectionObserver";

function News({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <div
      className={"news-section " + (entry?.isIntersecting ? "active" : "")}
      style={style}
      ref={ref}
    >
      <Title>НОВОСТИ</Title>
      <h1 className="pink-border">НОВОСТИ</h1>
      <div className="body">
        <div className="images">
          <img className="main" src={image1} alt="" />
          <img className="second" src={image2} alt="" />
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
          pellentesque volutpat et vitae. Consequat felis ut in pellentesque
          feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
          lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi.
          Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst
          ullamcorper nulla.
        </p>
      </div>
    </div>
  );
}

export default News;
