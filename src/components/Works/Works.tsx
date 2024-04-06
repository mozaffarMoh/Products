import "./Works.scss";
import { worksArray } from "./worksArray";

const Works = () => {
  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div className="works-data">
        {worksArray.map((work: any, index: number) => {
          return (
            <div className="works-item" key={index}>
              <a href={work.websiteLink} target="_blank">
                <div className="works-image">
                  <div className="brightness"></div>
                  <img src={work.src} alt="" />
                </div>
              </a>
                <p>{work.text}</p>
                <a href={work.descLink} target="_blank">Description</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
