import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "IT Consultant",
            "Scrum Master",
            "Project Manager",
            "Learner",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  );
};

export default TypeWriter;
