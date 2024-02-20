import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./loading.css";
import LoadingSvg from "./svg/LoadingSvg";
import SelectedSurah from "./pages/SelectedSurah";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      <Router>
        {isLoading ? (
          <div className="loader loader--style1" title="0">
            <LoadingSvg />
          </div>
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/surah/:number" element={<SelectedSurah />} />
            <Route
              path="/"
              element={!isLogged ? <Register /> : <AuthenticatedRoutes />}
            />
          </Routes>
        )}
      </Router>
    </>
  );
}

const AuthenticatedRoutes = () => (
  <>
    <Navbar />
    <Hero />
  </>
);

export default App;
