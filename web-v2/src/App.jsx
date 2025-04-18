import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import { Toaster } from "react-hot-toast";
import Contact from "../pages/Contact";
import axios from "axios";
import AkramCV from "../pages/profile-akram";
import AboutUs from "../pages/about-us";
axios.defaults.baseURL =import.meta.env.VITE_API_URL;
// Ensure the environment variable is properly accessed
export default function App() {
  return (
    <Router>

      <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{ duration: 2000 }}
          />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Benghezal-akram" element={<AkramCV />} />
        <Route path="/About-us" element={<AboutUs/>} />
       

      </Routes>
    </Router>
  );
}
