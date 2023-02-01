import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section className="home">
      <div className="row">
        <div className="left">
          <h2>
            Hello There!
            <span className="wave">👋</span>
          </h2>
          <h2>
            I am
            <span className="name">Tony Ndereva Maluki</span>
          </h2>
          <h2>
            <Typewriter
              options={{
                strings: ["Web and Mobile App Developer", "Student", "IT Technician"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
};

export default Home;
