import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg";
import AboutPage from "./pages/About/AboutPage";
import ExpPage from "./pages/Experience/ExpPage";
import HomePage from "./pages/Home/HomePage";
import ProjectPage from "./pages/Projects/ProjectPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import "./styles/global.scss";

const App = () => {
  const appHeight = () => {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => appHeight());
  useEffect(() => {
    window.addEventListener("resize", appHeight);
    return () => window.removeEventListener("resize", appHeight);
  }, []);

  return (
    <BrowserRouter>
      <ParticlesBg />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/experience" element={<ExpPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
