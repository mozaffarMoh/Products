import { useTranslation } from "react-i18next";
import "./About.scss";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about-text flexCenterColumn">
        <h1>{t("about.title")}</h1>
        <p>{t("about.desc")}</p>
      </div>
    </div>
  );
};

export default About;
