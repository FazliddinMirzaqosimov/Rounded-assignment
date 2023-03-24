import React from "react";
import { useCursorContext } from "../Cursor";

function Title({ children }: { children: React.ReactNode }) {
  const { functions } = useCursorContext();

  return (
    <h1 {...functions} className="title-component" style={{ fontWeight: 400 }}>
      {children}
    </h1>
  );
}

export default Title;
