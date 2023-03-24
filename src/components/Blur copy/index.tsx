import "./blur.style.scss";

function Finger({
  className,
  type,
}: {
  className: string;
  type: "left" | "right";
}) {
  return (
    <img
      src={`/src/assets/images/${type}.png`}
      alt=""
      className={"finger " + className}
    />
  );
}

export default Finger;
