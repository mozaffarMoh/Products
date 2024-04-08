import "./Sidebar.scss";
import React from "react";
import { FaX } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FcAbout } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = ({ setShowSideBar, showSideBar }: any) => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [isFirstHide, setIsFirstHide] = React.useState(false);
  const navigationArray = [
    { title: "Home", icon: IoHome, navigate: "/" },
    { title: "About", icon: FcAbout, navigate: "/about" },
    { title: "Products", icon: SlBasket, navigate: "/all-products" },
    {
      title: token ? "Logout" : "Login",
      icon: TbLogin2,
      navigate: "/login",
    },
  ];

  const handleHideSideBar = () => {
    setShowSideBar(false);
    setIsFirstHide(true);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleHideSideBar();
  };

  return (
    <div
      className={`sidebar ${showSideBar && "show-side-bar"}  ${
        !showSideBar && isFirstHide && "hide-side-bar"
      } `}
    >
      <div className="sidebar-header flexBetween">
        <div className="flexCenter">
          <h1>Sidebar</h1>
          <h2>List</h2>
        </div>
        <div className="close-icon" onClick={handleHideSideBar}>
          <FaX />
        </div>
      </div>
      {navigationArray.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            onClick={() => handleNavigate(item.navigate)}
            className="navigate-container flexStart"
          >
            <IconComponent size={30} />
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
