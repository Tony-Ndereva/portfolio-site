import Lottie from "lottie-react";
import skills from "../assets/skills.json";
import {
  DiHtml5,
  DiNodejs,
  DiCss3,
  DiReact,
  DiJavascript1,
  DiMongodb,
  DiPython,
  DiWindows,
  DiLinux,
  DiDjango,
} from "react-icons/di";
import { SiMysql,SiTypescript,SiPhp,SiExpress, SiLaravel } from "react-icons/si";
import { FaGit, FaDocker } from "react-icons/fa";

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
            <p>HTML 5</p>
          </div>
          <div className="tech-icon">
            <DiCss3 className="react-icons" />
            <p>css 3</p>
          </div>
          <div className="tech-icon">
            <DiJavascript1 className="react-icons" />
            <p>JavaScript</p>
          </div>
          <div className="tech-icon">
            <SiTypescript className="react-icons" />
            <p>TypeScript</p>
          </div>
          <div className="tech-icon">
            <DiReact className="react-icons" />
            <p>React</p>
          </div>
          <div className="tech-icon">
            <DiNodejs className="react-icons" />
            <p>Node JS</p>
          </div>
          <div className="tech-icon">
            <SiExpress className="react-icons" />
            <p>Express</p>
          </div>
          <div className="tech-icon">
            <DiPython className="react-icons" />
            <p>Python</p>
          </div>
          <div className="tech-icon">
            <DiDjango className="react-icons" />
            <p>Django</p>
          </div>
          <div className="tech-icon">
            <SiPhp className="react-icons" />
            <p>PHP</p>
          </div>
          <div className="tech-icon">
            <SiLaravel className="react-icons" />
            <p>Laravel</p>
          </div>
          <div className="tech-icon">
            <DiMongodb className="react-icons" />
            <p>Mongo DB</p>
          </div>
          <div className="tech-icon">
            <SiMysql className="react-icons" />
            <p>MySQL</p>
          </div>

          <div className="tech-icon">
            <DiWindows className="react-icons" />
            <p> Windows</p>
          </div>
          <div className="tech-icon">
            <DiLinux className="react-icons" />
            <p>Linux</p>
          </div>
          <div className="tech-icon">
            <FaGit className="react-icons" />
            <p>Git</p>
          </div>

          <div className="tech-icon">
            <FaDocker className="react-icons" />
            <p>Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
