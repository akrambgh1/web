import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";

import Admin from "../pages/admin";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// Ensure the environment variable is properly accessed
export default function App() {
  return (
    <Router>

    
      <Routes>

        
        <Route path="/" element={<Admin/>} />

      </Routes>
    </Router>
  );
}
