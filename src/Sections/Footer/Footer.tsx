import { useTranslation } from "react-i18next";
import "./Footer.scss";
import { footerArray } from "./footerArray";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer flexCenter">
      <p>{t("footer.copyrights")}</p>
      <div className="social-icons flexCenter">
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
