import "./Navbar.scss";
import { BiMenu } from "react-icons/bi";
import moonImg from "../../assets/images/Navbar/moon.svg";
import sunImg from "../../assets/images/Navbar/sun.svg";
import basketImg from "../../assets/images/Navbar/basket.ico";
import React from "react";

const Navbar = () => {
  const [isDay, setIsDay] = React.useState(false);
  return (
    <div className={`navbar ${isDay && "nightBG"}`}>
      <div className="menu-logo flexEnd">
        <BiMenu size={40} />
      </div>
      <div className="others-container flexEnd">
        <div className="others flexCenter">
          <img
            src={isDay ? sunImg : moonImg}
            style={{ transform: isDay ? "rotate(-120deg)" : "rotate(0deg)" }}
            onClick={() => setIsDay(!isDay)}
          />
          <img src={basketImg} className="basket-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
