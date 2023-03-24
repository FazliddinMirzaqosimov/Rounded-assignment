import { useRef } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../Arrow";
import Blur from "../../Blur";
import Button from "../../Button";
import { useCursorContext } from "../../Cursor";
import Finger from "../../Finger";
import useIntersectionObserver from "../../InterSectionObserver";
import Title from "../../Title";
import "./coures.style.scss";
import { courses, CourseType } from "./courses";

function Courses({ style }: { style?: React.CSSProperties }) {
  const { functions } = useCursorContext();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <div
      className={"courses-section " + (entry?.isIntersecting ? "active" : "")}
      style={style}
      ref={ref}
    >
      <Title>КУРСЫ</Title>
      <div className="cards">
        {courses.map((course: CourseType) => (
          <div className="card" key={course.id}>
            <Link to={course.link} className="border">
              <img src={course.image} {...functions} alt="" />
              <div className="title">
                <h3>{course.title}</h3>
                <p>
                  <span>{course.day}</span>
                  {course.month}
                </p>
              </div>
              <p className="text">{course.text}</p>
              <Arrow style={{ marginLeft: "auto" }} />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/">
        {" "}
        <Button>ВСЕ КУРСЫ</Button>
      </Link>
      <Blur className="pink-blur top-right  "></Blur>
      <Finger className="fingerprint" type="left" />
    </div>
  );
}

export default Courses;
