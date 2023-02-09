import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        options={{
          strings: ["Web Developer.", "life-time Student.", "IT Technician."],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  );
};

export default TypeWriter;
