import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import resumeData from "./resumeData";
import Particle from "./components/Particle";
import Tonydetails from "./Tonydetails";
import { useState } from "react";

const App = () => {
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

  return (
    <div>
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
                <h3>Here are afew projects I've worked on recently.</h3>
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
