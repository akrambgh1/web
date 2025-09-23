import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [secondLayerExpanded, setSecondLayerExpanded] = useState(false);

  const location = useLocation(); // 🟩 current route

  // 🟩 Close menu automatically on route change
  useEffect(() => {
    setSecondLayerExpanded(false);
    setIsMenuOpen(false);
  }, [location.pathname]); // runs every time path changes

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setSecondLayerExpanded(true), 200);
    } else {
      setSecondLayerExpanded(false);
      setTimeout(() => setIsMenuOpen(false), 200);
    }
  };

  // 🟩 detect mobile
  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // 🟩 open deep link or web link
  const openLink = (appLink, webLink, delay = 800) => {
    if (isMobile()) {
      window.location.href = appLink;
      setTimeout(() => {
        window.location.href = webLink;
      }, delay);
    } else {
      window.open(webLink, "_blank");
    }
  };

  return (
    <>
      <div
        onClick={handleMenuClick}
        className="flex gap-4 items-center text-white bg-[#111111] w-fit px-4 py-2 fixed top-12 left-12 max-md:left-4 max-md:top-8 rounded-[4px] z-[9999] cursor-pointer"
      >
        <Menu />
        <h1>Menu</h1>
      </div>

      {/* First Layer */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-[#111111] [transition:_all_1s_cubic-bezier(.77,_0,_.175,_1)] z-100 ${
          isMenuOpen ? "translate-x-[0]" : "translate-x-[-100%]"
        }`}
      ></div>

      {/* Second Layer */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] flex items-center justify-center bg-[#ffffff] [transition:_all_1s_cubic-bezier(.77,_0,_.175,_1)] z-[100] overflow-hidden ${
          secondLayerExpanded ? "translate-x-[0]" : "translate-x-[-100%]"
        }`}
      >
        <Link to="/contact">
          <span className="absolute top-12 right-12 max-md:hidden text-[1rem] h-fit w-fit tracking-normal border-[#2264f1] hover:bg-[#2264f1] hover:text-[#fff] transition-all duration-300 border-[2px] text-black px-4 py-3 leading-none cursor-pointer rounded-[4px]">
            Contact Now
          </span>
        </Link>

        <div className="flex flex-col md:relative md:h-full items-center max-md:py-8 max-md:w-full transition-all duration-200 justify-center leading-[100%] w-[70%] border-x-[1px] max-xl:border-0 border-[#dfdfdf] uppercase text-[7.5rem] max-md:text-[4rem] tracking-tighter text-center">
          <ul className="flex flex-col items-center justify-center w-full leading-[100%] uppercase text-[7.5rem] max-md:text-[4rem] tracking-tighter text-center">
            <li className="cursor-pointer hover:bg-[#2264f1] transition-all duration-300 w-full rounded-[7px]">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:bg-[#2264f1] transition-all duration-300 w-full rounded-[7px]">
              <Link to="/about-us">About</Link>
            </li>
            <li className="cursor-pointer hover:bg-[#2264f1] transition-all duration-300 w-full rounded-[7px]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex w-[60%] max-md:w-full items-center justify-between absolute bottom-4 tracking-normal text-[1rem] max-md:text-[.75rem] max-md:justify-evenly">
            <h1
              className="flex items-center gap-2 cursor-pointer group max-md:border-x-[1px] max-md:px-2 border-[#dfdfdf] h-[20px]"
              onClick={() =>
                openLink(
                  "instagram://user?username=weblocators",
                  "https://www.instagram.com/weblocators/"
                )
              }
            >
              Instagram
              <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-all duration-200 max-md:hidden" />
            </h1>

            <h1
              className="flex items-center gap-2 cursor-pointer group max-md:border-x-[1px] max-md:px-2 border-[#dfdfdf] h-[20px]"
              onClick={() =>
                openLink(
                  "linkedin://company/weblocators",
                  "https://www.linkedin.com/company/weblocators"
                )
              }
            >
              LinkedIn
              <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-all duration-200 max-md:hidden" />
            </h1>

            <h1
              className="flex items-center gap-2 cursor-pointer group max-md:border-x-[1px] max-md:px-2 border-[#dfdfdf] h-[20px]"
              onClick={() =>
                openLink(
                  "twitter://user?screen_name=weblocators",
                  "https://x.com/weblocators"
                )
              }
            >
              Twitter
              <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-all duration-200 max-md:hidden" />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
