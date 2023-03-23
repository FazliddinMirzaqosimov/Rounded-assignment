import React from "react";
import { useCursorContext } from "../Cursor";
import "./button.style.scss";

type PropType = {
  children: React.ReactNode;
  type?: "shaffof";
};

function Button({ children, type }: PropType) {
  const { functions } = useCursorContext();

  return (
    <button className={"button-component " + (type || "usual")} {...functions}>
      {children}
    </button>
  );
}

export default Button;
