import { useMediaQuery } from "react-responsive";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Welcome from "./pages/Welcome";
import Todos from "./pages/Todos";
import "./App.css";

function App() {
  const location = useLocation();
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)",
  });
  return (
    <div className="App">
      {isMobile ? (
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Welcome />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </AnimatePresence>
      ) : (
        <div className="min-h-screen flex justify-center items-center font-bold text-2xl text-white">
          Please use a mobile device.
          <br />
          😄
          <br />
          OR
          <br />
          Press F12 to open dev-tool on desktop.
        </div>
      )}
    </div>
  );
}

export default App;
