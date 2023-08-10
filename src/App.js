import { Routes, Route } from "react-router-dom";
import Boss from "./Pages/Boss";
import BossDetail from "./Pages/BossDetail";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/boss" element={<Boss />} />
      <Route path="/boss/:bossName" element={<BossDetail />} />
    </Routes>
  );
}
