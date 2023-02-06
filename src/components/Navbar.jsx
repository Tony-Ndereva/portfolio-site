import { useEffect, useState } from "react";
import TestFunction from "./Test";
// import { createRoot } from "react-dom";
// import { createBrowserRouter, RouterProvider, Route, link} from 'react-router-dom'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  function changeBackground() {
    if (window.scrollY >= 66) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    console.log("success");
  }, []);
  return (
    <section className={`navbar ${navBar ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-item">
          <Link to='/' className="Nav-link">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to='/Skills' className="Nav-link">
          <i className="fa-solid fa-screwdriver-wrench"></i>
            Skills
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/Projects" className="Nav-link">
            <i className="fa-solid fa-bars-progress"></i>
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
