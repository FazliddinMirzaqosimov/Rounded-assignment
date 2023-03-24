import "./number.style.scss";

import React, { useRef } from "react";
import { useCountUp } from "use-count-up";
import useIntersectionObserver from "../../InterSectionObserver";

function Numbers({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: "0px 0px -200px",
  });

  const { value: value1 } = useCountUp({
    isCounting: entry?.isIntersecting,
    start: 0,
    end: 60000,
    duration: 2,
  });
  const { value: value2 } = useCountUp({
    isCounting: entry?.isIntersecting,
    start: 0,
    end: 150,
    duration: 1,
  });
  const { value: value3 } = useCountUp({
    isCounting: entry?.isIntersecting,
    start: 0,
    end: 183000,
    duration: 3,
  });
  return (
    <div className="number-section" style={style} ref={ref}>
      <div className="card">
        <h1>{value1}</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>{" "}
      <div className="card">
        <h1>{value2}+</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>{" "}
      <div className="card">
        <h1>{value3} </h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default Numbers;
