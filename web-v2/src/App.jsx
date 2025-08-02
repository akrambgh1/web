import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";

// Import your pages
import Contact from "../pages/Contact";
import AkramCV from "../pages/profile-akram";
import AboutUs from "../pages/about-us";
import NotFound from "../pages/NotFound";

// ✅ Set axios base URL from Vite environment variable
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export default function App() {
  // ✅ Fix mobile 100vh issues
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <>
      <Router>
        {/* ✅ Global Toaster (notifications) */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />

        {/* ✅ Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Benghezal-akram" element={<AkramCV />} />
          <Route path="/About-us" element={<AboutUs />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
