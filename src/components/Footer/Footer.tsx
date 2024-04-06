import "./Footer.scss";
import { footerArray } from "./footerArray";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2023 - 2024 | Designed and coded by Mozaffar Mohammad</p>
      <div className="social-icons">
        {footerArray.map((icon: any, index: number) => {
          return (
            <a href={icon.href} target="_blank" key={index}>
              <img src={icon.src} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
