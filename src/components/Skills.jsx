import Lottie from "lottie-react";
import skills from "../assets/skills.json";
import { useState } from "react";
import { FaGit, FaDocker } from "react-icons/fa";
import {
  DiJoomla,
  DiDrupal,
  DiWordpress,
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
import { SiMysql, SiTypescript, SiPhp, SiExpress, SiLaravel } from "react-icons/si";

const Skills = () => {
  const [icons] = useState([
    { icon: DiHtml5, label: "HTML 5" },
    { icon: DiCss3, label: "CSS 3" },
    { icon: DiJavascript1, label: "JavaScript" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: DiReact, label: "React" },
    { icon: DiNodejs, label: "Node JS" },
    { icon: SiExpress, label: "Express" },
    { icon: DiPython, label: "Python" },
    { icon: DiDjango, label: "Django" },
    { icon: SiPhp, label: "PHP" },
    { icon: SiLaravel, label: "Laravel" },
    { icon: DiMongodb, label: "Mongo DB" },
    { icon: SiMysql, label: "MySQL" },
    { icon: DiWindows, label: "Windows" },
    { icon: DiLinux, label: "Linux" },
    { icon: FaGit, label: "Git" },
    { icon: FaDocker, label: "Docker" },
    { icon: DiWordpress, label: "Wordpress" },
    { icon: DiDrupal, label: "Drupal" },
    { icon: DiJoomla, label: "Joomla" },
  ]);

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
          {icons.map((item, index) => (
            <div className="tech-icon" key={index}>
              <item.icon className="react-icons" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
