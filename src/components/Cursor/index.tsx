import { createContext, useContext, useRef } from "react";
import "./cursor.style.scss";

const CursorContext = createContext<{
  functions: {};
  cursorRef?: React.RefObject<HTMLDivElement>;
}>({ functions: () => {} });

export const useCursorContext = () => useContext(CursorContext);

type PropTypes = {
  children: React.ReactNode;
};

function CursorProvider({ children }: PropTypes) {
  const cursorRef = useRef<HTMLDivElement>(null);

  document.documentElement.addEventListener("mousemove", (e) => {
    if (cursorRef?.current?.style && cursorRef?.current?.style) {
      cursorRef.current.style.top = e.clientY + "px";
      cursorRef.current.style.left = e.clientX + "px";
    }
  });

  const onMouseEnter = () => {
    cursorRef.current?.classList.add("active");
  };
  const onMouseLeave = () => {
    cursorRef.current?.classList.remove("active");
  };

  return (
    <>
      <CursorContext.Provider
        value={{ functions: { onMouseEnter, onMouseLeave }, cursorRef }}
      >
        {children}
        <div id="cursor" ref={cursorRef}></div>
      </CursorContext.Provider>
    </>
  );
}

export default CursorProvider;
