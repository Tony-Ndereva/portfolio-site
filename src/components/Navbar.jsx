import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { ThemeContext } from "./ThemeChanger";
import GAEventsTracker from "./GAEventsTracker";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
const Navbar = () => {
  const EventsTracker = GAEventsTracker("Navbar events");
  const [navBarScrolled, setNavBarScrolled] = useState(false);
  // This state above holds the state to determine if the window page is scrolled past 66px on Y-axis
  const [toggle, setToggle] = useState(false);
  // This state above defines the state at which the opening and closing of the navbar on responsive devices operates

  //const { theme, setTheme } = useContext(ThemeContext);

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const switchTheme = () => {
    dispatch(toggleTheme());

    // setTheme(newTheme);
  };

  function handleToggleClick() {
    setToggle(!toggle);
  }
  function handleNavbarStyle() {
    return !toggle ? "none" : "";
  }

  function handleNavClick() {
    setToggle(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 66 ? setNavBarScrolled(true) : setNavBarScrolled(false)
    );
  }, []);

  const resumeLink = {
    resume:
      "https://drive.google.com/file/d/1322VmP_Y5B7YjOW7dw-BVNvfw8R5u-SM/view?usp=sharing",
  };
  const { resume } = resumeLink;

  return (
    <section className={`navbar ${navBarScrolled ? "scrolled" : ""} `}>
      <div className={`nav-container ${!toggle ? "flat" : ""}`}>
        <div className="nav-item">
          {!toggle ? (
            <FaBars onClick={handleToggleClick} className="nav-toggler" />
          ) : (
            <FaTimes onClick={handleToggleClick} className="nav-toggler" />
          )}
        </div>
        <div
          className={`nav-item ${handleNavbarStyle()}`}
          onClick={handleNavClick}
        >
          <Link to="/" className="Nav-link">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </div>
        <div
          className={`nav-item ${handleNavbarStyle()}`}
          onClick={handleNavClick}
        >
          <Link to="/Skills" className="Nav-link">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            Skills
          </Link>
        </div>
        <div
          className={`nav-item ${handleNavbarStyle()}`}
          onClick={handleNavClick}
        >
          <Link to="/Projects" className="Nav-link">
            <i className="fa-solid fa-bars-progress"></i>
            Projects
          </Link>
        </div>
        <div
          className={`nav-item ${handleNavbarStyle()}`}
          onClick={handleNavClick}
        >
          <a
            href={resume}
            onClick={(e) => EventsTracker("Resume Page visit", resume)}
            className="Nav-link"
            target="_blank"
          >
            <i className="fa-regular fa-file"></i>
            Resume
          </a>
        </div>
        <div
          className={`nav-item ${toggle ? "none" : ""} transparent`}
          onClick={(e) => EventsTracker("LightMode Toggle", "Theme switch")}
        >
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={switchTheme}
              checked={theme === "light"}
              style={{ cursor: "pointer" }}
            />
            <label for="checkbox" className="label">
              <i className="fas fa-moon" style={{ color: "pink" }}></i>
              <i
                className="fas fa-sun"
                style={{ color: "yellow", fontSize: "0.8rem" }}
              ></i>
              <div className="ball"></div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
