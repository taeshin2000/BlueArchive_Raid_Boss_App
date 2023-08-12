import { Routes, Route, Navigate } from "react-router-dom";
import Boss from "./Pages/Boss";
import BossDetail from "./Pages/BossDetail";
import About from "./Pages/About";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/boss" />} />
      <Route path="/about" element={<About />} />
      <Route path="/boss" element={<Boss />} />
      <Route path="/boss/:bossName" element={<BossDetail />} />
    </Routes>
  );
}
