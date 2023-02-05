import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TestFunction from "./components/Test";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Test" element={<TestFunction />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
