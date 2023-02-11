import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "Software Engineer",
            "IT Consultant",
            "Networking Engineer",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  );
};

export default TypeWriter;
