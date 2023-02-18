import { BiMoon } from "react-icons/bi";
import { TfiShine } from "react-icons/tfi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Switch from "react-switch";

import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeChanger";

const Navbar = () => {
  const [navBarScrolled, setNavBarScrolled] = useState(false);
  // This state above holds the state to determine if the window page is scrolled past 66px on Y-axis
  const [toggle, setToggle] = useState(false);
  // This state above defines the state at which the opening and closing of the navbar on responsive devices operates

  // const [theme, setTheme] = useState("theme" ? "light" : "dark");
  // function switchTheme() {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  // }

  const { theme, setTheme } = useContext(ThemeContext);
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
  };
  // function handleTheme() {
  //   setLightMode((prevTheme) => !prevTheme);
  // }

  function handleToggle() {
    setToggle(!toggle);
  }
  function handleNavbar() {
    if (toggle === false) {
      return "none";
    } else {
      ("");
    }
  }
  function automaticNavClose() {
    setToggle(false);
  }

  function handleNavClick() {
    automaticNavClose();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function changeBackground() {
    if (window.scrollY >= 66) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <section className={`navbar ${navBarScrolled ? "scrolled" : ""} `}>
      <div className={`nav-container ${!toggle ? "flat" : ""}`}>
        <div className="nav-item">
          {!toggle ? (
            <FaBars onClick={handleToggle} className="nav-toggler" />
          ) : (
            <FaTimes onClick={handleToggle} className="nav-toggler" />
          )}
        </div>
        <div className={`nav-item ${handleNavbar()}`} onClick={handleNavClick}>
          <Link to="/" className="Nav-link">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </div>
        <div className={`nav-item ${handleNavbar()}`} onClick={handleNavClick}>
          <Link to="/Skills" className="Nav-link">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            Skills
          </Link>
        </div>
        <div className={`nav-item ${handleNavbar()}`} onClick={handleNavClick}>
          <Link to="/Projects" className="Nav-link">
            <i className="fa-solid fa-bars-progress"></i>
            Projects
          </Link>
        </div>
        <div className={`nav-item ${handleNavbar()}`} onClick={handleNavClick}>
          <a
            href="https://drive.google.com/file/d/1YGlwGRgWGkWwyDBU0YUHPQDPY7R-H8Kr/view?usp=share_link"
            className="Nav-link"
            target="_blank"
          >
            <i className="fa-regular fa-file"></i>
            Resume
          </a>
        </div>
        {/* <button
          className={`nav-item ${toggle ? "none" : ""} transparent`}
         
        >
          {theme === "light" ? (
            <TfiShine className="darkmode-toggler" onClick={switchTheme} />
          ) : (
            <BiMoon className="darkmode-toggler" onClick={switchTheme} />
          )}
        </button> */}
        <div className={`nav-item ${toggle ? "none" : ""} transparent`}>
          <Switch
            onChange={switchTheme}
            checked={theme === "light"}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor={"#A020F0"}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
