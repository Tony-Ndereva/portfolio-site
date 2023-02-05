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
        projectImage={each.projects.projectImage}
        projectName={each.projects.projectName}
        projectDescription={each.projects.projectDescription}
        key={each.projects.id}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Test" element={<TestFunction />}></Route>
        <Route
          path="/Projects"
          element={
            <section className="project-section">
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
