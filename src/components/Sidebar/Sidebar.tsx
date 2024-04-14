import "./Sidebar.scss";
import React from "react";
import { FaX } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FcAbout } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";
import arIcon from "../../assets/images/Navbar/ar.svg";
import enIcon from "../../assets/images/Navbar/en.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { BsFlag } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Sidebar = ({ setShowSideBar, showSideBar }: any) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const lang: any = Cookies.get("language");
  const [isFirstHide, setIsFirstHide] = React.useState(false);
  const navigationArray = [
    { title: t("navbar.home"), icon: IoHome, navigate: "/" },
    { title: t("navbar.about"), icon: FcAbout, navigate: "/about" },
    { title: t("navbar.products"), icon: SlBasket, navigate: "/all-products" },
    {
      title: t("navbar.changeLang"),
      icon: BsFlag,
      navigate: "#",
      img: lang === "ar" ? enIcon : arIcon,
      langValue: lang === "ar" ? "en" : "ar",
    },
    {
      title: token ? t("navbar.logout") : t("navbar.login"),
      icon: TbLogin2,
      navigate: "/login",
    },
  ];

  const handleHideSideBar = () => {
    setShowSideBar(false);
    setIsFirstHide(true);
  };

  const handleNavigate = (item: any) => {
    if (item.langValue) {
      Cookies.set("language", item.langValue);
      i18n.changeLanguage(item.langValue);
      setTimeout(() => {
        handleHideSideBar();
      }, 1000);
    } else {
      if (item.navigate == "/login") {
        Cookies.remove("token");
      }
      navigate(item.navigate);
      handleHideSideBar();
    }
  };

  return (
    <div
      className={`sidebar ${showSideBar && "show-side-bar"}  ${
        !showSideBar && isFirstHide && "hide-side-bar"
      } `}
    >
      <div className="sidebar-header flexBetween">
        <div className="flexCenter">
          <h1>{t("navbar.sidebar")}</h1>
          <h2>{t("navbar.list")}</h2>
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
            onClick={() => handleNavigate(item)}
            className="navigate-container flexBetween"
          >
            <div className=" flexStart">
              <IconComponent size={30} />
              <h3>{item.title}</h3>
            </div>
            {item.img && (
              <img
                src={item.img}
                width={30}
                height={30}
                style={{ borderRadius: "6px", marginTop: "5px" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
