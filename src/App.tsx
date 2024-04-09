import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Cookies from "js-cookie";
import React from "react";

function App() {
  const isNight = Cookies.get("isNight");
  const [rerenderComponent, setRerenderComponent] = React.useState(false);

  React.useEffect(() => {
    if (rerenderComponent) {
      setRerenderComponent(false);
    }
  });
  return (
    <div className={`app ${isNight && "night-mode-styles"}`}>
      <Router basename="Products">
        <AppRoutes
          Routes={Routes}
          Route={Route}
          setRerenderComponent={setRerenderComponent}
        />
      </Router>
    </div>
  );
}

export default App;
