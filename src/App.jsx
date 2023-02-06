import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TestFunction from "./components/Test";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import resumeData from "./resumeData";
const App = () => {
  const projects = resumeData.map((each) => {
    return (
      <Projects
       {...each.projects}
       key={each.projects.id}
      />
    );
  });

  return (
    <>
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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
