import "./blur.style.scss";
import dfdfg from "../../assets/images/left.png";

function Finger({
  className,
  type,
}: {
  className: string;
  type: "left" | "right";
}) {
  console.log(dfdfg);

  return (
    <img
      src={`/src/assets/images/${type}.png`}
      alt=""
      className={"finger " + className}
    />
  );
}

export default Finger;
