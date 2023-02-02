import { useEffect, useState } from "react";

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
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    console.log('success')
  },[]);
  return (
    <section className={`navbar ${navBar ? "true" : ""}`}>
      <div className="nav-container">
        <div className="nav-item">
          <a href="" className="Nav-link">
            <i className="fa-solid fa-house"></i>
            Home
          </a>
        </div>
        <div className="nav-item">
          <a href="" className="Nav-link">
            <i className="fa-solid fa-user"></i>
            About
          </a>
        </div>
        <div className="nav-item">
          <a href="" className="Nav-link">
            <i className="fa-solid fa-bars-progress"></i>
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
