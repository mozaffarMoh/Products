import "./Home.scss";
import profilePicture from "../../assets/images/me.jpg";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-img">
        <div className="img-circle">
          <img src={profilePicture} alt="" />
        </div>
      </div>
      <div className="home-text">
        <h1>
          G'Day , I'am Mozaffar! and I'm a<br />
          <span>Front-End Developer</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
