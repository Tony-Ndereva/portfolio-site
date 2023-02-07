import Lottie from "lottie-react";
import skills from "../assets/skills.json";
import { DiHtml5,DiNodejs,DiCss3,DiReact,DiJavascript1,DiMongodb, DiPython } from "react-icons/di";
import {SiMysql} from 'react-icons/si'
import { IconContext } from "react-icons";
const Skills = () => {
  const View = () => {
    return <Lottie animationData={skills} />;
  };
  return (
    <section className="skill-wrapper">
      <div className="upper-container">
        <div className="left-skill-wrapper">
          <h2 className="skill-header">
            How do I <span className="orange">Deliver</span>
          </h2>
          <span className="skill-description">
            My skill set is vast and greatest expertise revolves in the world of
            interactive ultra-modern, responsive and content rich websites. I
            develop{" "}
            <span className="orange">
              modern, highly interactive, responsive websites with cutting edge
              technologies.{" "}
            </span>
            I love great design and my passion is to "make it real" by blending
            colors and shapes with meaningful transitions in order to achieve
            the best user experience. Below are some of the various skills and
            toolsets that allow me to achieve success in what I do.
          </span>
        </div>
        <div className="right-skill-wrapper">
          <div className="skill-animation-container">
            <View />
          </div>
        </div>
      </div>
      <div className="lower-container">
        <h1>
          Professional <span className="orange">Skillset</span>
        </h1>

        <div className="icons-container">
          <div className="tech-icon">
            <DiHtml5 className="react-icons" />
          </div>
          <div className="tech-icon">
            <DiCss3 className="react-icons" />
          </div>
          <div className="tech-icon">
            <DiJavascript1 className="react-icons" />
          </div>
          <div className="tech-icon">
            <DiNodejs className="react-icons" />
          </div>
          <div className="tech-icon">
            <DiReact className="react-icons" />
          </div>
          <div className="tech-icon">
            <DiMongodb className="react-icons" />
          </div>
          <div className="tech-icon">
            <SiMysql className="react-icons" />
          </div>
          <div className="tech-icon">
            <DiPython className="react-icons" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
