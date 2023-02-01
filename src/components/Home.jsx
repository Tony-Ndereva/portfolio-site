import Typewriter from "typewriter-effect";
import coding from "../assets/coding.json";
import Lottie from "lottie-react";
import avatar from "../assets/avatar.svg";
const Home = () => {
  const View = () => {
    return <Lottie animationData={coding} />;
  };
  return (
    <>
      <section className="home">
        <div className="row">
          <div className="left">
            <h2 className="heading">
              Hello There!
              <span className="wave">👋</span>
            </h2>
            <h2 className="heading-name">
              I am
              <span className="name">Tony Ndereva Maluki</span>
            </h2>
            <h2 className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "life-time Student",
                    "IT Technician",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <div className="right">
            <View />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="left">
          <div className="about-header">
            <h2>
              LET ME <span className="orange">INTRODUCE</span> MYSELF
            </h2>
          </div>
          <span className="description">
            Tony is a Software Engineer based in Nairobi, KENYA.With a knack for
            implementing new project using all stages of the software
            development life-cycle, from requirement gathering and feasibility
            studies to deployment and maintenance. Organized and dependable
            candidate successful at managing multiple priorities with a positive
            attitude. I am able to provide business solutions ranging from
            designing and developing interactive ultra-modern, responsive and
            content rich websites to designing and developing fast ,secure
            backend API and Database services, according to your defined
            business needs.
          </span>
        </div>
        <img src={avatar} className="avatar" alt="" />
        <div className="clearfix"></div>
      </section>
      <section className="contacts">
        <div className="text-wrapper">
          <h2>CONTACT ME ON</h2>
          <h4>
            Feel free to <span className="orange">connect</span> with me
          </h4>
        </div>
        <div className="contacts-icons">
          <a href="https://github.com/G-69westside" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tony-maluki-9b9611173/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/life.astony/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/asap_toni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="mailto:tonymaluki@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
