import GAEventsTracker from "./GAEventsTracker";

const externalData = {
  Github: "https://github.com/Tony-Ndereva/",
  LinkedIn: "https://www.linkedin.com/in/tony-maluki-9b9611173/",
  Instagram: "https://www.instagram.com/life.astony/",
  Twitter: "https://twitter.com/asap_toni",
  Email: "mailto:tonymaluki@gmail.com",
};
const { Github, Instagram, LinkedIn, Twitter, Email } = externalData;
const Socials = () => {
  const EventsTracker = GAEventsTracker("External Links");
  return (
    <div className="contacts-icons">
      <a
        href={Github}
        target="_blank"
        onClick={() => EventsTracker("GitHub page visit", Github)}
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href={LinkedIn}
        onClick={() => EventsTracker("LinkedIn page visit", LinkedIn)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a
        href={Instagram}
        onClick={() => EventsTracker("Instagram page visit", Instagram)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href={Twitter}
        onClick={() => EventsTracker("Twitter page visit", Twitter)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href={Email} onClick={() => EventsTracker("Email page visit", Email)}>
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
};

export default Socials;
