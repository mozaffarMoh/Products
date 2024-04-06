import { useNavigate } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="page-not-found flexCenterColumn">
      <h2>Sorry this URL is not found !!</h2>
      <button onClick={handleNavigate}>Back to home</button>
    </div>
  );
};

export default PageNotFound;
