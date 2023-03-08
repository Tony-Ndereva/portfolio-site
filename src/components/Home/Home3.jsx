import Socials from "../Socials";
import GAEventsTracker from "../GAEventsTracker";
const Home3 = () => {
  const EventsTracker = GAEventsTracker("External Links");
  return (
    <section className="contacts">
      <div className="text-wrapper">
        <h2>Let's work together</h2>
        <h4>
          Feel free to <span className="orange">connect</span> with me
        </h4>
      </div>
      <Socials />
      <a
        href="https://wakatime.com/@3b96c015-dfc0-446d-8b3a-bc2fbefa9b31"
        target="_blank"
        onClick={(e) => EventsTracker("WakaTime", "WakaTime Stats")}
      >
        <img
          src="https://wakatime.com/badge/user/3b96c015-dfc0-446d-8b3a-bc2fbefa9b31.svg"
          alt="Total time coded since Jan 31 2022"
        />
      </a>
    </section>
  );
};

export default Home3;
