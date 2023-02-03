// import Typewriter from "typewriter-effect";
import coding from "../../assets/coding.json";
import Lottie from "lottie-react";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Particle from "../Particle";
import TypeWriter from "../Typewriter";
const Home = () => {
  const View = () => {
    return <Lottie animationData={coding} />;
  };
  return (
    <>
      <Particle />
      <section className="home">
        <div className="row">
          <div className="left">
            <h2 className="heading">
              Hello There!
              <span className="wave">👋</span>
            </h2>
            <h2 className="heading-name">
              I am  {" "} <span className="name">Tony Ndereva Maluki</span>
            </h2>

            <TypeWriter />
          </div>
          <div className="right">
            <View />
          </div>
        </div>
      </section>

      <Home2 />
      <Home3 />
    </>
  );
};

export default Home;
