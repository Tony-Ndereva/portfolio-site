import Lottie from "lottie-react";
import skills from "../assets/skills.json";
const Skills = () => {
  const View = () => {
    return <Lottie animationData={skills} />;
  };
  return (
    <section className="skill-wrapper">
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
          colors and shapes with meaningful transitions in order to achieve the
          best user experience. Below are some of the various skills and
          toolsets that allow me to achieve success in what I do.
        </span>
      </div>
      <div className="right-skill-wrapper">
        <View />
      </div>
  
    </section>
  );
};

export default Skills;
