import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import resumeData from "./resumeData";
import Particle from "./components/Particle";
const App = () => {
  const projects = resumeData.map((each) => {
    return <Projects {...each.projects} key={each.projects.id} />;
  });

  return (
    <>
      <Particle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

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
      <Footer />
    </>
  );
};

export default App;
