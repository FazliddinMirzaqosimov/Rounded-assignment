import "./banner.style.scss";
import graduation from "../../../assets/images/graduation-cap.png";
import microscope from "../../../assets/images/microscope.png";
import users from "../../../assets/images/users.png";
import wallet from "../../../assets/images/wallet.png";
import { useCursorContext } from "../../Cursor";
import { useRef } from "react";
import useIntersectionObserver from "../../InterSectionObserver";
import Blur from "../../Blur";
import Finger from "../../Finger";
 
type SectionType = {
  id: string;
  image: string;
  text: string;
};
const sections: SectionType[] = [
  { id: "01", image: graduation, text: "Lorem ipsum dolor sit amet" },
  { id: "02", image: microscope, text: "Lorem ipsum dolor sit amet" },
  { id: "03", image: users, text: "Lorem ipsum dolor sit amet" },
  { id: "04", image: wallet, text: "Lorem ipsum dolor sit amet" },
];
function Banner({ style }: { style?: React.CSSProperties }) {
  const { functions } = useCursorContext();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: "0px 0px -200px",
  });

  return (
    <div
      className={"banner-section " + (entry?.isIntersecting ? "active" : "")}
      style={style}
      ref={ref}
    >
      <ul>
        {sections.map((section: SectionType) => (
          <li key={section.id}>
            <div className="image" {...functions}>
              <img src={section.image} alt="" />
            </div>
            <p>{section.text}</p>
          </li>
        ))}
      </ul>
      <Blur className="pink-blur bottom-left" />
      <Finger className="fingerprint" type="right" />
    </div>
  );
}

export default Banner;
