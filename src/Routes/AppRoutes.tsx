import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, Login, PageNotFound, Register } from "../Pages";

const AppRoutes = () => {
  return (
    <Router basename="Products">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
