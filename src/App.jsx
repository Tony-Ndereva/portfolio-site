import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA4 from "react-ga4"; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Particle from "./components/Particle";
import Tonydetails from "./Tonydetails";
import resumeData from "./resumeData";
import { ThemeContext } from "./components/ThemeChanger";

const TRACKING_ID = import.meta.env.VITE_REACT_APP_GA4_TRACKING_ID;

ReactGA4.initialize(TRACKING_ID);

const App = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA4.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: location.search,
    });
  }, [location]);

  const [projectsData, setProjectsData] = useState([]);
  const [userData, setUserData] = useState([]);
  const projects = projectsData.map((project, index) => {
    return <Projects {...project.projects} key={index + 1} />;
  });
  useEffect(() => {
    setProjectsData(resumeData);
    setUserData(Tonydetails);
  }, []);

  const footer = userData.map((user, index) => {
    return <Footer {...user.details} key={index + 1} />;
  });
  const home = userData.map((user, index) => {
    return <Home {...user.details} key={index + 1} />;
  });

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
