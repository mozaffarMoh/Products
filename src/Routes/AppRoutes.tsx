import { useLocation } from "react-router-dom";
import {
  About,
  AllProducts,
  Home,
  Login,
  PageNotFound,
  Register,
  SingleProduct,
} from "../Pages";
import { Footer, Navbar } from "../Sections";
import React from "react";

const AppRoutes = ({ Routes, Route }: any) => {
  const location = useLocation();
  const [rerenderComponent, setRerenderComponent] = React.useState(false);
  const [hideNavbarAndFooter, setHideNavbarAndFooter] = React.useState(false);

  /* Hide Navbar if login and register page is exist */
  React.useEffect(() => {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    ) {
      setHideNavbarAndFooter(true);
    } else {
      setHideNavbarAndFooter(false);
    }
  }, [location]);

  React.useEffect(() => {
    if (rerenderComponent) {
      setRerenderComponent(false);
    }
  });

  return (
    <>
      {!hideNavbarAndFooter && (
        <Navbar setRerenderComponent={setRerenderComponent} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
