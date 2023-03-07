import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import resumeData from "./resumeData";
import Particle from "./components/Particle";
import Tonydetails from "./Tonydetails";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./components/ThemeChanger";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-257499540-3";

ReactGA.initialize(TRACKING_ID);

const App = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const [projectsData, setProjectsData] = useState(resumeData);
  const [userData, setUserData] = useState(Tonydetails);
  const projects = projectsData.map((each) => {
    return <Projects {...each.projects} key={each.projects.id} />;
  });
  const footer = userData.map((each) => {
    return <Footer {...each.details} key={each.details.id} />;
  });
  const home = userData.map((each) => {
    return <Home {...each.details} key={each.details.id} />;
  });

  // The code just below gets the props for lightMode
  //const {lightMode} = useContext(ThemeContext)
  //console.log(lightMode)

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div data-theme={theme} className="app">
      <Particle />
      <Navbar />
      <Routes>
        <Route path="/" element={home}></Route>
        <Route
          path="/Projects"
          element={
            <section className="project-section">
              <div className="project-intro">
                <h1>
                  My Recent <span className="orange">Works</span>
                </h1>
                <h3>Here are a few projects I've worked on recently.</h3>
              </div>
              <div className="project-container">{projects}</div>
            </section>
          }
        ></Route>
        <Route path="/Skills" element={<Skills />}></Route>
      </Routes>
      {footer}
    </div>
  );
};

export default App;
