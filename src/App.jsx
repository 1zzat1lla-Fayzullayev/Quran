import React, { useEffect } from "react";
import { useState } from "react";
import Register from "./pages/Register";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./loading.css";
import LoadingSvg from "./svg/LoadingSvg";
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
      {isLoading ? (
        <div className="loader loader--style1" title="0">
          <LoadingSvg />
        </div>
      ) : (
        <div>{!isLogged ? <Register /> : <Navbar />}</div>
      )}
    </>
  );
}

export default App;
