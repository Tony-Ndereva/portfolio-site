import avatar from "../../assets/avatar.svg";

const Home2 = () => {
  return (
    <section className="about">
      <div className="about-header">
        <h2>
          LET ME <span className="orange">INTRODUCE</span> MYSELF
        </h2>
      </div>
      <span className="description">
        Tony is a Software Engineer based in Nairobi, KENYA.With a knack for
        implementing new project using all stages of the software development
        life-cycle, from requirement gathering and feasibility studies to
        deployment and maintenance. Organized and dependable candidate
        successful at managing multiple priorities with a positive attitude. I
        am able to provide{" "}
        <span className="orange">
          business solutions ranging from designing and developing interactive
          ultra-modern, responsive and content rich websites
        </span>{" "}
        to designing and developing fast ,secure backend API and Database
        services, according to your defined business needs.
      </span>

      <img src={avatar} className="avatar" alt="" />

      <div className="clearfix"></div>
    </section>
  );
};

export default Home2;
