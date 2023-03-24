import "./form.style.scss";

import React, { useRef } from "react";
import Title from "../../Title";
import Button from "../../Button";
import useIntersectionObserver from "../../InterSectionObserver";

function Form({ style }: { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: "0px 0px -200px",
  });

  return (
    <div
      className={"form-section " + (entry?.isIntersecting ? "active" : "")}
      style={style}
      ref={ref}
    >
      <Title>ОСТАВЬТЕ ЗАЯВКУ</Title>
      <div className="body">
        <input type="text" placeholder="Ваше имя:" />
        <input type="number" placeholder="+998 --- --- -- --" />
        <input type="email" placeholder="Email:" />
        <Button>Оставить заявку</Button>
      </div>
    </div>
  );
}

export default Form;
