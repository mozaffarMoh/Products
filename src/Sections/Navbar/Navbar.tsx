import "./Navbar.scss";
import { BiMenu } from "react-icons/bi";
import moonImg from "../../assets/images/Navbar/moon.svg";
import sunImg from "../../assets/images/Navbar/sun.svg";
import basketImg from "../../assets/images/Navbar/basket.ico";
import React from "react";
import { Sidebar } from "../../components";
import Cookies from "js-cookie";
import useGet from "../../api/useGet";
import { endPoint } from "../../api/endPoint";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setRerenderComponent }: any) => {
  const navigate = useNavigate();
  const isNight: any = Cookies.get("isNight");
  const [showSideBar, setShowSideBar] = React.useState(false);
  const [data, loading]: any = useGet(endPoint.allProducts);

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
        <BiMenu onClick={() => setShowSideBar(true)} />
      </div>
      <div className="others-container flexEnd">
        <div className="others flexCenter ">
          <img
            src={isNight ? sunImg : moonImg}
            style={{ transform: isNight ? "rotate(-120deg)" : "rotate(0deg)" }}
            onClick={handleChangeDayStatus}
          />
          <div className="position-relative">
            <img
              src={basketImg}
              className="basket-icon"
              onClick={() => navigate("/all-products")}
            />
            <div className="porducts-number flexCenter">
              {loading ? (
                <Spinner size="sm" className="loader-animation" />
              ) : (
                <p>{data && data.length}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
