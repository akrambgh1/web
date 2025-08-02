import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";
// Import your pages
import Contact from "./pages/Contact";
import AkramCV from "./pages/profile-akram";
import AboutUs from "./pages/about-us";
import NotFound from "./pages/notfound";


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
     <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Weblocators",
          "url": "https://www.weblocators.com",
          "description": "Weblocators is a modern web agency that builds high-quality websites and provides digital solutions for businesses.",
          "email": "contactus@weblocators.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contactus@weblocators.com",
            "contactType": "customer support",
            "areaServed": "Worldwide",
            "availableLanguage": ["en", "fr", "ar"]
          },
          "sameAs": [
            "https://www.facebook.com/weblocators",
            "https://www.linkedin.com/company/weblocators"
          ]
        }
        `}
      </script>
    </Helmet>
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
