import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "IT Consultant",
            "Project Manager",
            "Networking Guru",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  );
};

export default TypeWriter;
