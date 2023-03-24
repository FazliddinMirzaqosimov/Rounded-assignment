import "./arrow.style.scss";
import arrow from "../../assets/images/Arrow.png";

function Arrow({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="arrow-component" style={style}>
      <img src={arrow} alt="" />
      <div></div>
    </div>
  );
}

export default Arrow;
