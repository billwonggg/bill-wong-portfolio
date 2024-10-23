import loadable from "@loadable/component";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg";
import "./styles/global.scss";
import { useAppHeight } from "./util/hooks";

const AboutPage = loadable(() => import("./pages/About/AboutPage"));
const CertificationsPage = loadable(() => import("./pages/Certifications/CertificationsPage"));
const ExpPage = loadable(() => import("./pages/Experience/ExpPage"));
const HomePage = loadable(() => import("./pages/Home/HomePage"));
const ProjectPage = loadable(() => import("./pages/Projects/ProjectPage"));
const SkillsPage = loadable(() => import("./pages/Skills/SkillsPage"));

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
