import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <div className="app">
      <Router basename="Products">
        <AppRoutes Routes={Routes} Route={Route} />
      </Router>
    </div>
  );
}

export default App;
