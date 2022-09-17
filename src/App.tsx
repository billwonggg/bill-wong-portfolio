import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import ProjectPage from "./pages/Projects/ProjectPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import ExpPage from "./pages/Experience/ExpPage";
import { AnimatePresence } from "framer-motion";
import "./styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
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
