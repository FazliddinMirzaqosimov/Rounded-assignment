import React from "react";
import { useCursorContext } from "../Cursor";
import "./button.style.scss";

type PropType = {
  children: React.ReactNode;
  type?: "shaffof";
  size?: "small";
};

function Button({ children, type, size }: PropType) {
  const { functions } = useCursorContext();

  return (
    <button
      className={"button-component " + (type || "usual ") + " " + size}
      {...functions}
    >
      {children}
    </button>
  );
}

export default Button;
