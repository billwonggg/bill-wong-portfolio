import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg";
import AboutPage from "./pages/About/AboutPage";
import CertificationsPage from "./pages/Certifications/CertificationsPage";
import ExpPage from "./pages/Experience/ExpPage";
import HomePage from "./pages/Home/HomePage";
import ProjectPage from "./pages/Projects/ProjectPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import "./styles/global.scss";
import { useAppHeight } from "./util/hooks";

const App = () => {
  useAppHeight();

  return (
    <BrowserRouter>
      <ParticlesBg />
      <AnimatePresence mode="wait">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/experience" element={<ExpPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
