import "./Navbar.scss";
import { BiMenu } from "react-icons/bi";
import moonImg from "../../assets/images/Navbar/moon.svg";
import sunImg from "../../assets/images/Navbar/sun.svg";
import basketImg from "../../assets/images/Navbar/basket.ico";
import React from "react";
import { Sidebar } from "../../components";
import Cookies from "js-cookie";

const Navbar = ({ setRerenderComponent }: any) => {
  const isNight: any = Cookies.get("isNight");
  const [showSideBar, setShowSideBar] = React.useState(false);

  const handleChangeDayStatus = () => {
    if (isNight) {
      Cookies.set("isNight", "");
    } else {
      Cookies.set("isNight", "true");
    }
    setRerenderComponent(true);
  };

  return (
    <div className="navbar">
      <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="menu-logo flexEnd">
        <BiMenu size={40} onClick={() => setShowSideBar(true)} />
      </div>
      <div className="others-container flexEnd">
        <div className="others flexCenter">
          <img
            src={isNight ? sunImg : moonImg}
            style={{ transform: isNight ? "rotate(-120deg)" : "rotate(0deg)" }}
            onClick={handleChangeDayStatus}
          />
          <img src={basketImg} className="basket-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
