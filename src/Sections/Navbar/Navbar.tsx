import "./Navbar.scss";
import { BiMenu } from "react-icons/bi";
import moonImg from "../../assets/images/Navbar/moon.svg";
import sunImg from "../../assets/images/Navbar/sun.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu-logo">
        <BiMenu size={40} />
      </div>
      <div className="others">
        <div className="day-status">
          <img className={sunImg} />
          <img className={moonImg} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
