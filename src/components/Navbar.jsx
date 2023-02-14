import { BiMoon } from "react-icons/bi";
import { TfiShine } from "react-icons/tfi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";


import { Link } from "react-router-dom";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [lightMode, setLightMode] = useState(false);

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

  function handleLightMode() {
    setLightMode((prevMode) => !prevMode);
  }
  function handleNavClick() {
    setToggle(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function changeBackground() {
    if (window.scrollY >= 66) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <section className={`navbar ${navBar ? "scrolled" : ""}`}>
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
        <div
          className={`nav-item ${toggle ? "none" : ""}`}
          onClick={handleNavClick}
        >
          {!lightMode ? (
            <TfiShine className="darkmode-toggler" onClick={handleLightMode} />
          ) : (
            <BiMoon className="darkmode-toggler" onClick={handleLightMode} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
