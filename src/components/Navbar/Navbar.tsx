import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar fixed-top">
      <div className="navbar-item">
        <a href="#home">Home</a>
        <div className="links-line"></div>
      </div>
      <div className="navbar-item">
        <a href="#about">About</a>
        <div className="links-line"></div>
      </div>
      <div className="navbar-item">
        <a href="#skills">Skills</a>
        <div className="links-line"></div>
      </div>
      <div className="navbar-item">
        <a href="#works">Works</a>
        <div className="links-line"></div>
      </div>
      <div className="navbar-item">
        <a href="#contact">Contact</a>
        <div className="links-line"></div>
      </div>
    </div>
  );
};

export default Navbar;
