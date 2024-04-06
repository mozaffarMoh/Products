import "./Skills.scss";
import { skillsArray } from "./skillsArray";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills-content">
        <div className="skills-data">
          {skillsArray.map((skill: any, index: number) => {
            return (
              <div className="skills-item" key={index}>
                <img src={skill.src} loading="lazy" alt="" />
                <p>{skill.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
