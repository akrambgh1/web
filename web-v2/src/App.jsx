import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import { Toaster } from "react-hot-toast";
import Contact from "../pages/Contact";
import axios from "axios";

import Admin from "../pages/admin";
axios.defaults.baseURL ="https://weblocators-backend.onrender.com/";
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
        <Route path="/admin" element={<Admin/>} />

      </Routes>
    </Router>
  );
}
