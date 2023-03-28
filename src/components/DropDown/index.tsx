import React from "react";
import "./dorp.style.scss";
import flag from "../../assets/images/Mask Group (2).png";
import { IoMdArrowDropdown } from "react-icons/io";

function DropDown() {
  return (
    <div className="dorpdown-comp">
      <div className="lang current">
        <img src={flag} alt="" />
        Ru
        <IoMdArrowDropdown size={20} />
      </div>
      <div className="anothers">
        <div className="lang">
          <img src={flag} alt="" />
          En
        </div>
        <div className="lang">
          <img src={flag} alt="" />
          Uz
        </div>
      </div>
    </div>
  );
}

export default DropDown;
